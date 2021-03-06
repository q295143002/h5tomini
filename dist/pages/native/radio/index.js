import React from "../../../ReactWX.js";

function P() {
  this.state = {
    items: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }]
  };
}

P = React.toClass(P, React.Component, {
  radioChange: function (e) {
    // eslint-disable-next-line
    console.log('radio发生change事件，携带value值为：', e.value);
  },
  render: function () {
    var h = React.createElement;
    return h("view", null, h("radio-group", {
      class: "radio-group",
      onChange: this.radioChange,
      "data-change-uid": "e25_49",
      "data-beacon-uid": "default"
    }, this.state.items.map(function (item, i740) {
      return h("label", {
        class: "radio"
      }, h("radio", {
        value: item.name,
        checked: item.checked,
        text: item.value,
        isRight: true
      }));
    }, this)));;
  },
  classUid: "c1403"
}, {});
Page(React.registerPage(P, "pages/native/radio/index"));
export default P;