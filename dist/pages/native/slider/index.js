import React from "../../../ReactWX.js";

function P() {
  this.bind();
}

P = React.toClass(P, React.Component, {
  bind: function () {
    for (let i = 1; i < 5; i++) {
      let index = i + 1;

      this['slider' + index + 'change'] = function (e) {
        // eslint-disable-next-line
        console.log('slider' + 'index' + '发生 change 事件，携带值为', e.value);
      };
    }
  },
  switch1Change: function (e) {
    // eslint-disable-next-line
    console.log('switch1 发生 change 事件，携带值为', e.value);
  },
  switch2Change: function (e) {
    // eslint-disable-next-line
    console.log('switch2 发生 change 事件，携带值为', e.value);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", {
      class: "anu-item"
    }, h("text", {
      class: "anu-page-header"
    }, "\u8BBE\u7F6Estep"), h("view", {
      class: "anu-block"
    }, h(React.useComponent, {
      onChange: this.slider2change,
      step: "5",
      is: "XSlider",
      "data-instance-uid": 'i39_24_' + 0
    }))), h("view", {
      class: "anu-item"
    }, h("text", {
      class: "anu-page-header"
    }, "\u663E\u793A\u5F53\u524Dvalue"), h("view", {
      class: "anu-block"
    }, h(React.useComponent, {
      onChange: this.slider3change,
      "show-value": true,
      is: "XSlider",
      "data-instance-uid": 'i45_24_' + 0
    }))), h("view", {
      class: "anu-item"
    }, h("text", {
      class: "anu-page-header"
    }, "\u8BBE\u7F6E\u6700\u5C0F/\u6700\u5927\u503C"), h("view", {
      class: "anu-block"
    }, h(React.useComponent, {
      onChange: this.slider4change,
      min: "50",
      max: "200",
      "show-value": true,
      is: "XSlider",
      "data-instance-uid": 'i52_24_' + 0
    }))), h("view", {
      class: "anu-item"
    }, h("view", null, h("switch", {
      checked: false,
      onChange: this.switch1Change,
      "data-change-uid": "e62_48",
      "data-beacon-uid": "default"
    }), h("switch", {
      onChange: this.switch2Change,
      "data-change-uid": "e63_32",
      "data-beacon-uid": "default"
    }))));;
  },
  classUid: "c2155"
}, {});
Page(React.registerPage(P, "pages/native/slider/index"));
export default P;