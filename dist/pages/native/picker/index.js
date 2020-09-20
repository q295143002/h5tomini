import React from "../../../ReactWX.js";

function P(props) {
  this.state = {
    show: false,
    index: 0,
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    multiIndex: [0, 0, 0],
    multiArray: [["无脊柱动物", "脊柱动物"], ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"], ["猪肉绦虫", "吸血虫"]],
    list1: ['iphone', '华为', '小米', '三星', '魅族', '锤子', 'oppo', 'vivo', 'iphone1', '华为1', '小米1', '三星1', '魅族1', '锤子1', 'oppo1', 'vivo1']
  };
}

P = React.toClass(P, React.Component, {
  showPicker: function () {
    // eslint-disable-next-line
    console.log('showPicker');
    this.setState({
      show: true
    });
  },
  close: function () {
    // eslint-disable-next-line
    console.log('close');
    this.setState({
      show: false
    });
  },
  change: function (e) {
    // eslint-disable-next-line
    console.log('...', e);
    this.setState({
      index: e.value
    });
  },
  bindPickerChange: function (e) {
    // eslint-disable-next-line
    console.log("确认", e);
  },
  bindPickerColumnChange: function (e) {
    console.log("修改的列为", e.detail.column, "，值为", e.detail.value);
    var data = {
      multiArray: this.state.multiArray,
      multiIndex: this.state.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;

    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ["扁性动物", "线形动物", "环节动物", "软体动物", "节肢动物"];
            data.multiArray[2] = ["猪肉绦虫", "吸血虫"];
            break;

          case 1:
            data.multiArray[1] = ["鱼", "两栖动物", "爬行动物"];
            data.multiArray[2] = ["鲫鱼", "带鱼"];
            break;
        }

        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;

      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ["猪肉绦虫", "吸血虫"];
                break;

              case 1:
                data.multiArray[2] = ["蛔虫"];
                break;

              case 2:
                data.multiArray[2] = ["蚂蚁", "蚂蟥"];
                break;

              case 3:
                data.multiArray[2] = ["河蚌", "蜗牛", "蛞蝓"];
                break;

              case 4:
                data.multiArray[2] = ["昆虫", "甲壳动物", "蛛形动物", "多足动物"];
                break;
            }

            break;

          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ["鲫鱼", "带鱼"];
                break;

              case 1:
                data.multiArray[2] = ["青蛙", "娃娃鱼"];
                break;

              case 2:
                data.multiArray[2] = ["蜥蜴", "龟", "壁虎"];
                break;
            }

            break;
        }

        data.multiIndex[2] = 0;
        break;
    }

    this.setState(data);
  },
  bindDateChange: function (e) {
    // eslint-disable-next-line
    console.log('...bindDateChange', e);
    this.setState({
      date: e.value
    });
  },
  bindTimeChange: function (e) {
    this.setState({
      time: e.value
    });
  },
  bindRegionChange: function (e) {
    this.setState({
      region: e.value
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "picker-demo"
    }, h("view", {
      class: "picker-title"
    }, h("text", {
      class: "title-text"
    }, "\u57FA\u672C")), h("view", {
      class: "item-li"
    }, h("text", {
      class: "item-li-detail"
    }, "\u4E00\u5217"), h("picker", {
      value: 0,
      onCancel: this.close.bind(this),
      onChange: this.change.bind(this),
      range: this.state.list1,
      "data-cancel-uid": "e171_24",
      "data-beacon-uid": "default",
      "data-change-uid": "e172_24"
    }, h("text", null, "\u5F53\u524D\u9009\u62E9\uFF1A", this.state.list1[this.state.index]))), h("view", {
      class: "item-li"
    }, h("text", {
      class: "item-li-detail"
    }, "\u591A\u5217"), h("picker", {
      mode: "multiSelector",
      value: this.state.multiIndex,
      onCancel: this.close.bind(this),
      onChange: this.bindPickerChange.bind(this),
      onColumnChange: this.bindPickerColumnChange.bind(this),
      range: this.state.multiArray,
      "data-cancel-uid": "e183_24",
      "data-beacon-uid": "default",
      "data-change-uid": "e184_24",
      "data-columnchange-uid": "e185_24"
    }, h("text", null, "\u5F53\u524D\u9009\u62E9\uFF1A", this.state.multiArray[0][this.state.multiIndex[0]], ",", this.state.multiArray[1][this.state.multiIndex[1]], ",", this.state.multiArray[2][this.state.multiIndex[2]]))), h("view", {
      class: "item-li"
    }, h("text", {
      class: "item-li-detail"
    }, "\u65E5\u671F\u9009\u62E9\u5668"), h("picker", {
      mode: "date",
      value: this.state.date,
      start: "2015-09-01",
      end: "2017-09-01",
      onCancel: this.close.bind(this),
      onChange: this.bindDateChange.bind(this),
      "data-cancel-uid": "e205_24",
      "data-beacon-uid": "default",
      "data-change-uid": "e206_24"
    }, h("text", null, "\u5F53\u524D\u9009\u62E9\uFF1A", this.state.date))), h("view", {
      class: "item-li"
    }, h("text", {
      class: "item-li-detail"
    }, "\u65F6\u95F4\u9009\u62E9\u5668"), h("picker", {
      mode: "time",
      value: this.state.time,
      start: "09:01",
      end: "21:01",
      onCancel: this.close.bind(this),
      onChange: this.bindTimeChange.bind(this),
      "data-cancel-uid": "e218_24",
      "data-beacon-uid": "default",
      "data-change-uid": "e219_24"
    }, h("text", null, "\u5F53\u524D\u9009\u62E9\uFF1A", this.state.time))), h("view", {
      class: "item-li"
    }, h("text", {
      class: "item-li-detail"
    }, "\u7701\u5E02\u533A\u9009\u62E9\u5668"), h("picker", {
      mode: "region",
      value: this.state.region,
      onCancel: this.close.bind(this),
      onChange: this.bindRegionChange.bind(this),
      "data-cancel-uid": "e229_24",
      "data-beacon-uid": "default",
      "data-change-uid": "e230_24"
    }, h("text", null, "\u5F53\u524D\u9009\u62E9\uFF1A", this.state.region[0], ",", this.state.region[1], ",", this.state.region[2]))), h("view", {
      style: React.toStyle({
        height: '800px'
      }, this.props, 'style16035')
    }));;
  },
  classUid: "c8126"
}, {});
Page(React.registerPage(P, "pages/native/picker/index"));
export default P;