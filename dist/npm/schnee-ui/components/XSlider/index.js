import React from "../../../../ReactWX.js";

function XSlider(props) {
  this.buttons = [{}, {}]; // 存储两个滑块的信息

  this.progressBar = 0;
  this.moving = false; // 控制滑块是否滑动

  this.state = {
    onChange: props.bindchange || Date,
    onChanging: props.bindchanging || Date,
    btnLeft: 0,
    // props.value[0],
    btnRight: 0,
    // props.value[1]
    showValue: this.props.value
  };
  this.sliderWidth = this.props['block-size']; // 滑块的宽度

  this.singleActiveColor = this.props.isSingle ? this.props.activeColor : this.props.backgroundColor;
}

// 目前快应用计算不出dom的宽高(2018-12-12), 写死
// const TOTAL_WIDTH = 240;
// 滑块的大小，取值范围为 12 - 28
// const MAX_BLOCK_SIZE = 28;
// const MIN_BLOCK_SIZE = 12;
XSlider = React.toClass(XSlider, React.Component, {
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      showValue: nextProps.value
    });
    this.getAunEnv();
  },
  getPercent: function (value) {
    // console.log('第几个滑块',value);
    //将props.value转换成基于[min, max]区间的位置的百分比
    return (value - this.props.min) / (this.props.max - this.props.min);
  },
  getSlideValue: function (percent) {
    //将百分比转换为value
    return ~~(percent * (this.props.max - this.props.min)) + this.props.min;
  },
  getEventPageX: function (e) {
    // console.log('e:',e);
    var object = e.changedTouches || e.touches || [e];
    return object[0].pageX;
  },
  componentDidMount: function () {
    this.getAunEnv();
  },
  execAfterGetPogressBar: function (val) {
    this.progressBar = val - this.sliderWidth; // console.log('总宽度=', val, '可以滑动的宽度', this.progressBar, '滑块宽度', this.sliderWidth, '显示value宽度', this.showValueWidth);

    var value = this.props.value;
    var valueOne = Array.isArray(value) ? value[0] : value; // 第一个滑块

    var valueTwo = value[1]; // // 第二个滑块

    var percentOne = this.getPercent(valueOne);
    var percentTow = this.getPercent(valueTwo);
    this.stepPercent = this.getPercent(this.props.step); //  console.log('valueTwo', valueOne, valueTwo);

    this.setState({
      btnLeft: ~~(percentOne * this.progressBar),
      // 左滑块位置
      btnRight: ~~(percentTow * this.progressBar) // 右滑块位置

    }, () => {
      if (this.buttons[0].hasOwnProperty('value')) {
        return false;
      } else {
        this.buttons = [{
          value: valueOne //~~(this.state.btnLeft / this.maxRight * 100)

        }, {
          value: valueTwo //~~(this.state.btnRight / this.maxRight * 100)

        }];
      }
    }); // console.log("++++++",this)
  },
  getAunEnv: function () {
    // console.log(' 当前所处于哪个平台', ANU_ENV);
    this.refs.trackDom;
    var that = this;
    // wx中获取进度条的长度
    setTimeout(() => {
      const query = wx.createSelectorQuery().in(this.wx);
      query.select('.anu-slider-track').boundingClientRect(res => {
        // console.log('微信的res', res);
        this.execAfterGetPogressBar.call(that, res.width);
      });
      query.exec();
    }, 300);
  },
  handleTouchStart: function (which, event) {
    // event.preventDefault();   // 阻止事件默认行为
    // event.stopPropagation();  // 阻止事件冒泡和捕获
    if (this.props.disabled) {
      return;
    }

    var pageX = this.getEventPageX(event); //event.touches[0].pageX;

    this.moving = true;
    var index = 'btnLeft' === which ? 0 : 1; // 判断是左滑块还是右滑块

    this.buttons[index].startX = pageX; // 开始位置

    this.buttons[index].zIndex = 10; //  当前的 z-index 调大一下

    this.buttons[index].left = this.state[which]; // 初始传入的滑块
    // console.log('....', this.buttons);
  },
  handleTouchMove: function (which, event) {
    if (this.props.disabled) {
      return;
    }

    if (!this.moving) {
      return;
    }

    var pageX = this.getEventPageX(event); // event.changedTouches[0].pageX;  // 滑块在页面中的x坐标。

    var index = 'btnLeft' === which ? 0 : 1; // 判断是左滑块还是右滑块

    var button = this.buttons[index];
    var move = pageX - button.startX; // 移动距离

    var left = button.left + move; // 当前滑块的css left

    var p = left / this.progressBar; // 100%

    if (this.props.step != 1) {
      var number = p / this.stepPercent;
      var integer = Math.trunc(number);
      var decimal = number - integer;

      if (decimal > 0.5) {
        integer++;
      }

      p = this.stepPercent * integer;
    }

    if (p < 0) {
      //0~1
      p = 0;
    }

    if (p > 1) {
      p = 1;
    }

    this.setState({
      [which]: p * this.progressBar
    });

    if (!event.detail) {
      event.detail = {};
    }

    event.detail.value = this.getSlideValue(p);
    this.setState({
      showValue: event.detail.value
    }); // 判断两个滑块，滑动。左滑块不能超过右滑块，右滑块不能超过左滑块

    if (!this.props.isSingle) {
      if (which === 'btnLeft') {
        if (p < 0) {
          p = 0;
        }

        if (p >= this.state.btnRight / this.progressBar) {
          p = this.state.btnRight / this.progressBar;
        }
      } else if (which === 'btnRight') {
        if (p <= this.state.btnLeft / this.progressBar) {
          p = this.state.btnLeft / this.progressBar;
        }

        if (p > 1) {
          p = 1;
        }
      }

      this.setState({
        [which]: p * this.progressBar
      });
      button.value = this.getSlideValue(p);
      var btn1 = this.buttons[0].value;
      var btn2 = this.buttons[1].value;

      if (btn1 > btn2) {
        btn2 = btn1;
      }

      event.detail.value = [btn1, btn2];
      this.setState({
        showValue: event.detail.value
      });
    } // console.log('组件的', event);


    this.state.onChanging(event); // 拖动过程中触发的事件，event.detail = {value: value}
  },
  handleTouchEnd: function (which, event) {
    this.handleTouchMove(which, event);
    this.state.onChange(event); // 完成一次拖动后触发的事件，event.detail = {value: value}

    this.moving = false;
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      className: "anu-slider"
    }, h("view", {
      className: "anu-slider-track",
      ref: "trackDom",
      style: React.toStyle({
        backgroundImage: "linear-gradient(to bottom, " + this.props.backgroundColor + ", " + this.props.backgroundColor + ")"
      }, this.props, 'style17463')
    }, h("view", {
      // ref={dom => this.btnLeft = dom}
      onTouchStart: event => this.handleTouchStart('btnLeft', event),
      onTouchMove: event => this.handleTouchMove('btnLeft', event),
      onTouchEnd: event => this.handleTouchEnd('btnLeft', event),
      className: "anu-slider-thumb-0",
      style: React.toStyle({
        left: this.state.btnLeft + 'PX'
      }, this.props, 'style17929'),
      "data-touchstart-uid": "e264_24",
      "data-beacon-uid": "default",
      "data-touchmove-uid": "e265_24",
      "data-touchend-uid": "e266_24"
    }, h("text", {
      className: "anu-slider-progressBar",
      style: React.toStyle({
        backgroundColor: this.singleActiveColor
      }, this.props, 'style19167')
    }), h("text", {
      className: "anu-slider-sliderBlock",
      style: React.toStyle({
        width: this.props['block-size'] + "PX",
        height: this.props['block-size'] + "PX",
        top: (30 - this.props['block-size']) / 2 + "PX",
        backgroundColor: "" + this.props['block-color'],
        zIndex: this.buttons[0].zIndex || 1
      }, this.props, 'style19988')
    })), !this.props.isSingle && h("view", {
      // ref={dom => this.btnRight = dom}
      onTouchStart: event => this.handleTouchStart('btnRight', event),
      onTouchMove: event => this.handleTouchMove('btnRight', event),
      onTouchEnd: event => this.handleTouchEnd('btnRight', event),
      className: "anu-slider-thumb-1",
      style: React.toStyle({
        left: this.state.btnRight + 'PX'
      }, this.props, 'style20790'),
      "data-touchstart-uid": "e292_24",
      "data-beacon-uid": "default",
      "data-touchmove-uid": "e293_24",
      "data-touchend-uid": "e294_24"
    }, h("text", {
      className: "anu-slider-progressBar",
      style: React.toStyle({
        backgroundColor: this.props.activeColor
      }, this.props, 'style22067')
    }), h("text", {
      className: "anu-slider-sliderBlock",
      style: React.toStyle({
        width: this.props['block-size'] + "PX",
        height: this.props['block-size'] + "PX",
        top: (30 - this.props['block-size']) / 2 + "PX",
        backgroundColor: "" + this.props['block-color'],
        zIndex: this.buttons[1].zIndex || 0
      }, this.props, 'style22888')
    }))), this.props['show-value'] && h("view", {
      className: "anu-slider-showValue"
    }, this.props.isSingle ? this.state.showValue : this.state.showValue[0] + "," + this.state.showValue[1]));;
  },
  classUid: "c12343"
}, {});
XSlider.defaultProps = {
  isSingle: true,
  // 默认表示单滑块。若为双滑块一定要传入false。
  min: 0,
  // 滑块最左边表示的值。受控属性：滑块滑到最左边应该表示的值。
  max: 100,
  // 滑块最右边表示的值。受控属性：滑块滑到最右边应该表示的值。 注意：有传入step属性时，必须保证 (max - min) 能被 step 整除。
  step: 1,
  // 步长，取值必须大于 0，并且可被(max - min)整除。
  disabled: false,
  // 禁用滑块。 受控属性：禁止滑块滑动，阻止touch事件。
  value: 0,
  // 当前取值, 可以是数组
  activeColor: '#00bcd4',
  // 已选择的颜色
  backgroundColor: '#ccc',
  // 背景条的颜色
  'block-size': 28,
  // 滑块的大小，取值范围为 12 - 28
  'block-color': '#fff',
  // 滑块的颜色
  'show-value': false // 是否显示当前 value

};
Component(React.registerComponent(XSlider, "XSlider"));
export default XSlider;