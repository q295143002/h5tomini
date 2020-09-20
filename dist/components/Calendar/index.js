import React from "../../ReactWX.js";
import { holidays } from "../../common/utils/holidayDate";
import EventEmitter from "../../common/utils/EventEmitter";
const TRAIN_MULTI_SELECT_SUB_TEXT = '备选';
const TRAIN_MULTI_SELECT_MAIN_TEXT = '主选';

function isEmptyObject(obj) {
  let arr = Object.keys(obj);
  return arr.length === 0;
}

function Calendar(props) {
  var now = new Date();
  var currentYear = now.getFullYear();
  var currentMonth = now.getMonth();
  var calendarDays = parseFloat(props.calendarDays) || 90;
  this.state = {
    eventType: props.eventType,
    storageType: props.storageType,
    sText: props.sText,
    eText: props.eText,
    // calendarDays: parseFloat(props.calendarDays) || 90,
    dateTitle: ['日', '一', '二', '三', '四', '五', '六'],
    toViewId: props.toViewId,
    calendarArray: generateDates(currentYear, currentMonth, calendarDays, holidays, {}),
    isDoubleSelect: !!props.isDoubleSelect,
    isMultiSelect: !!props.isMultiSelect,
    heightStyle: {}
  };
  var that = this; //调整日历组件的高度

  React.api.getSystemInfo({
    success: function (sysInfo) {
      if (sysInfo.windowHeigh !== 320) {
        that.setState({
          heightStyle: {
            height: sysInfo.windowHeight + "px"
          }
        });
      }
    }
  });
  var formatToday = JSON.stringify(now).replace(/T.+|"/g, '');
  this.state.firstSelected = props.date || formatToday; //YYYT-MM-DD  // 选择第一个日期

  if (props.isMultiSelect) {
    // 是否多选
    this.updateMultiSelectedDays(this.state, props);
  } else if (props.isDoubleSelect) {
    // 是否双选
    this.state.secondSelected = props.eDate;
  } //XXXXXX


  this.updateCalendarData(this.state); // 更新选择的日历页面状态
}

Calendar = React.toClass(Calendar, React.Component, {
  componentWillReceiveProps: function (nextProps) {
    if (!isEmptyObject(nextProps.updateInfoData)) {
      var now = new Date();
      var currentYear = now.getFullYear();
      var currentMonth = now.getMonth();
      var calendarDays = parseFloat(nextProps.calendarDays) || 90;
      this.setState({
        calendarArray: generateDates(currentYear, currentMonth, calendarDays, holidays, nextProps.updateInfoData)
      }, () => {
        this.updateCalendarData(this.state);
      });
    }
  },
  updateMultiSelectedDays: function (state, props) {
    // 多选的选择日期
    var hash = {};
    var maxSelectDays = ~~props.maxSelectDays || 5; // 最多备选多少个

    var multiSelectedDays = props.dates; // 已经选择的备选日期

    if (!Array.isArray(multiSelectedDays)) {
      multiSelectedDays = [];
      state.days = multiSelectedDays;
    }

    multiSelectedDays.forEach(function (el) {
      hash[el] = 1;
    });
    state.maxSelectDays = maxSelectDays;
    state.multiSelectedDays = hash;
  },
  updateCalendarData: function (state, cb) {
    state.calendarArray.forEach(function (month) {
      month.daysArray.forEach(function (day) {
        calculateDayClassName(day, state);
      });
    });
    this.setState(state, cb);
  },
  dateSelected: function (item) {
    var isDisabled = item.isDisabled;

    if (isDisabled) {
      return;
    }

    if (this.state.isDoubleSelect) {
      // 双选的情况
      this.dateSelectDouble(item);
    } else if (this.state.isMultiSelect) {
      // 多选的情况
      this.dateSelectMulti(item);
    } else {
      // 单选的情况
      this.dateSelectDefault(item);
    }
  },
  getNextDay: function (formateDate) {
    var throwIt = false;

    try {
      this.state.calendarArray.forEach(function (month) {
        month.daysArray.forEach(function (day) {
          if (day.formateDate === formateDate) {
            throwIt = true;
          } else if (throwIt && day.formateDate) {
            throw day.formateDate;
          }
        });
      });
    } catch (e) {
      return e;
    }
  },
  dateSelectDefault: function (item) {
    //需要用户传入firstSelected
    var state = this.state;
    var resdata = item.resdata; //门票

    var {
      eventType,
      storageType
    } = this.state;
    state.firstSelected = state.firstSelected == item.formateDate ? null : item.formateDate;
    this.updateCalendarData(state, function () {
      this.dateSelectedFinish({
        eventType,
        storageType,
        resdata,
        showToast: false
      });
    });
  },
  dateSelectDouble: function (item) {
    var firstSelected = this.state.firstSelected;
    var secondSelected = this.state.secondSelected;
    var selectedDate = dateToNumber(item.formateDate); // 当前入店日期

    var curFirst = dateToNumber(firstSelected); // 当前离店日期

    var curSecond = dateToNumber(secondSelected);
    var {
      eventType,
      storageType
    } = this.state;

    if (this.state.confirmSecondDate) {
      if (selectedDate === curFirst || selectedDate === curSecond) {
        this.state.confirmSecondDate = false;
        this.updateCalendarData(this.state, () => {
          this.dateSelectedFinish({
            eventType,
            storageType
          });
        }); //跳转
      } else if (selectedDate < curFirst) {
        this.state.firstSelected = item.formateDate;
        this.updateCalendarData(this.state); //不跳转
      } else if (selectedDate > curFirst) {
        //由8月1日变成8月2日，说明用户只想改进店时间，离店时间不变
        this.state.secondSelected = item.formateDate;
        this.state.confirmSecondDate = false;
        this.updateCalendarData(this.state, () => {
          this.dateSelectedFinish({
            eventType,
            storageType
          });
        }); //跳转
      }
    } else {
      //这里只有两种情况，改变一个日期，还是改变两个日期
      if (selectedDate < curFirst) {
        this.state.firstSelected = item.formateDate;

        if (!this.state.secondSelected) {
          this.state.secondSelected = this.state.eDate || this.getNextDay(item.formateDate);
        }
      } else if (selectedDate >= curFirst) {
        this.state.firstSelected = item.formateDate;
        this.state.secondSelected = this.getNextDay(item.formateDate);
        this.state.confirmSecondDate = true;
      }

      this.state.confirmSecondDate = true;
      this.updateCalendarData(this.state);
    }
  },
  dateSelectMulti: function (item) {
    //需要用户传入days, isMultiSelected, maxSelectDays
    var multiSelectedDays = this.state.multiSelectedDays || {};

    if (item.formateDate in multiSelectedDays) {
      delete multiSelectedDays[item.formateDate];
    } else {
      var maxSelectDays = this.state.maxSelectDays;

      if (Object.keys(multiSelectedDays).length >= maxSelectDays) {
        React.api.showToast({
          title: "\u6700\u591A\u53EF\u9009\u62E9" + maxSelectDays + "\u4E2A\u65E5\u671F"
        });
        return;
      }

      this.state.multiSelectedDays[item.formateDate] = 1;
    }

    this.updateCalendarData(this.state);
  },
  dateSelectedFinish: function ({
    eventType,
    storageType = '',
    callbackData = '',
    resdata = '',
    showToast = true
  } = {}) {
    let bizType = this.state.bizType;
    let data = this.state;

    if (eventType) {
      let date;
      let storageDate;

      if (callbackData) {
        date = callbackData;
      } else if (data.isDoubleSelect) {
        date = {
          startDate: new Date(data.firstSelected),
          endDate: new Date(data.secondSelected)
        };
        storageDate = JSON.stringify(date);
      } else {
        storageDate = date = new Date(data.firstSelected);

        if (bizType === 'ticket' && resdata !== '') {
          date = JSON.parse(resdata);
          storageDate = resdata;
        }
      }

      EventEmitter.dispatch(eventType, date);

      if (storageType && storageType !== '') {
        try {
          React.api.setStorageSync(storageType, storageDate); //eslint-disabled-next-line
        } catch (e) {
          new Error(e);
        }
      }
    }

    if (showToast) {
      React.api.showToast({
        title: '日期选择成功',
        icon: 'success',
        duration: 500,
        success: function () {
          setTimeout(function () {
            // console.log('选择结束');
            React.api.navigateBack();
          }, 100);
        }
      });
    } else {
      setTimeout(() => {
        // console.log('选择结束');
        React.api.navigateBack();
      }, 100);
    }
  },
  multiSelectFinish: function () {
    var callbackData = Object.keys(this.state.multiSelectedDays);
    var eventType = this.state.eventType;
    this.dateSelectedFinish({
      eventType,
      callbackData
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "calendar-content",
      style: React.toStyle(this.state.heightStyle, this.props, 'style19358')
    }, h("view", {
      className: "e-head"
    }, this.state.dateTitle.map(function (item, idx) {
      return h("text", {
        className: idx === 0 || idx === 6 ? 'w s' : 'w',
        key: item
      }, item);
    }, this)), h("scroll-view", {
      className: 'm-calendar  anu-col ' + (this.props.isMultiSelect ? 'multi' : ''),
      "scroll-y": "true",
      "scroll-into-view": this.state.toViewId
    }, this.state.calendarArray.map(function (month, i10185) {
      return h("view", {
        className: "e-month anu-col",
        id: 'cal_' + month.idMonth,
        type: month.title,
        key: month.title
      }, h("text", {
        className: "b-header anu-flex-center"
      }, month.title), h("view", {
        className: "b-row anu-row"
      }, month.daysArray.map(function (item, i10576) {
        return item.isBlank ? h("view", {
          class: "item",
          key: item.middleText
        }) : h("view", {
          key: item.middleText,
          onTap: this.dateSelected.bind(this, item),
          class: 'anu-flex-center anu-col-flex item item-a ' + item.className,
          "data-tap-uid": 'e289_44_' + i10185 + '-' + i10576,
          "data-beacon-uid": "default"
        }, h("text", {
          class: 'base ' + item.topClass
        }, item.topText), h("text", {
          class: 'dayclass ' + item.className
        }, item.middleText), item.bottomText && h("text", {
          class: item.isHighLight ? 'text highlight' : 'text'
        }, item.bottomText));
      }, this)));
    }, this)), this.props.isMultiSelect && h("view", null, h("view", {
      className: "e-btn-padding"
    }), h("view", {
      className: "e-btn",
      onTap: this.multiSelectFinish.bind(this),
      "data-tap-uid": "e309_44",
      "data-beacon-uid": "default"
    }, h("text", {
      className: "textColor"
    }, "\u786E\u5B9A"))));;
  },
  classUid: "c12677"
}, {});
Component(React.registerComponent(Calendar, "Calendar"));
export default Calendar;

function generateDates(currentYear, currentMonth, calendarDays, holidays, infoData) {
  // 生成日历表格
  //月份是0到1
  var day = new Date(currentYear, currentMonth, 1).getDay();
  let monthLen = Math.floor(calendarDays / 30);
  var months = []; //收集4个月

  var formatToday = JSON.stringify(new Date()).replace(/T.+|"/g, ''); //今天的时间格式化 YYYY-MM-DD

  var useEnabledCount = false,
      enabledCount = 0;

  for (var i = 0; i <= monthLen; i++) {
    var month = [];
    var curMonth = currentMonth + i;

    if (curMonth + i > 11) {
      currentYear++; //月份从0开始， 0~11，大于11，年份加1，月份置0

      curMonth = 0;
    }

    var formatMonth = curMonth + 1 < 10 ? '0' + (curMonth + 1) : curMonth + 1;
    month = {
      idMonth: currentYear + '-' + formatMonth,
      // 即: 2019-01
      title: currentYear + '月' + formatMonth + '日',
      // 即: 2019年01月
      daysArray: []
    };

    if (day !== 0) {
      //如果每个月的第一天不是星期日，那么需要补上空白的格子
      for (let j = 0; j < day; j++) {
        month.daysArray.push({
          isBlank: true,
          middleText: Math.random()
        });
      }
    }

    for (let j = 1; j <= 31; j++) {
      if (j > 27) {
        //28, 29,30,31都需要特别处理,比如2月30日，4月31日
        if (new Date(currentYear, curMonth, j).getMonth() !== curMonth) {
          continue;
        }
      } //{ item: "2010-01-12", week: 0}


      var formateDate = currentYear + '-' + formatMonth + '-' + (j < 10 ? '0' + j : j); //计算是否能点击，只有从今天起到未来90天或calendarDays天之内才能选择中

      var isDisabled = void 0;

      if (!useEnabledCount) {
        isDisabled = formateDate !== formatToday;

        if (isDisabled === false) {
          useEnabledCount = true;
          enabledCount = 1;
        }
      } else {
        enabledCount++;
        isDisabled = enabledCount > calendarDays;
      }

      var dateItem = {
        date: currentYear + '/' + curMonth + '/' + j,
        formateDate: formateDate,
        day: day,
        //0-6,
        isBlank: false,
        topText: '',
        isWeekend: day === 0 || day === 6,
        middleText: formateDate == formatToday ? '今天' : j,
        bottomText: '',
        isDisabled: isDisabled,
        text: ''
      };

      if (holidays.holiday[formateDate]) {
        dateItem.topClass = 'holiday';
        dateItem.vacation = false;
        dateItem.topText = holidays.holiday[formateDate];
      }

      if (holidays.work[formateDate]) {
        dateItem.topClass = 'ban';
        dateItem.topText = '上班';
        dateItem.isWeekend = false;
      }

      if (holidays.vacation[formateDate]) {
        dateItem.topClass = 'xiu';
        dateItem.topText = holidays.holiday[formateDate] === 1 ? '放假' : holidays.holiday[formateDate];
        dateItem.vacation = true;
      }

      if (infoData[formateDate] && !isDisabled) {
        dateItem.text = infoData[formateDate].text || '';
        dateItem.isHighLight = infoData[formateDate].isHighLight || '';
      }

      day++;

      if (day == 7) {
        day = 0;
      }

      month.daysArray.push(dateItem);
    }

    months.push(month);
  }

  return months;
}

function calculateDayClassName(item, state) {
  //-----------处理酒店事业部入住和离店文案
  if (item.formateDate === state.firstSelected && state.sText) {
    item.bottomText = state.sText;
  } else if (item.formateDate === state.secondSelected && state.eText) {
    item.bottomText = state.eText;
  } else if (item.text) {
    item.bottomText = item.text;
  } else {
    item.bottomText = '';
  } // --- 处理选择或者取消或者是否周日的类名


  var classArray = [];

  if (state.isMultiSelect) {
    if (state.multiSelectedDays[item.formateDate]) {
      classArray.push('select');
      item.bottomText = TRAIN_MULTI_SELECT_SUB_TEXT;
    }

    if (item.formateDate === state.firstSelected) {
      classArray.push('select');
      item.bottomText = TRAIN_MULTI_SELECT_MAIN_TEXT;
    }
  } else if (item.formateDate === state.firstSelected) {
    classArray.push('select');
  } else if (item.formateDate === state.secondSelected) {
    classArray.push(state.confirmSecondDate ? 'select-second' : 'select');
  }

  if (item.isDisabled) {
    classArray.push('disabled');
  } else if (item.isWeekend || item.vacation) {
    classArray.push('weekend');
  }

  item.className = classArray.join(' ');
}

function dateToNumber(date) {
  if (!date) {
    return NaN;
  }

  return parseFloat(date.replace(/-/g, ''));
}