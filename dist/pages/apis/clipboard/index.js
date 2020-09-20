import React from "../../../ReactWX.js";

function P() {
  this.state = {
    data: '1234455',
    copy: ''
  };
}

/* eslint-disable */
// 事件
P = React.toClass(P, React.Component, {
  copy: function () {
    console.log('copy');
    React.api.setClipboardData({
      data: this.state.data
    });
  },
  paste: function () {
    console.log('paste');
    React.api.getClipboardData({
      success: res => {
        console.log('data', res);
        this.setState({
          copy: res.data
        });
      }
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "col"
    }, h("view", {
      class: "item"
    }, this.state.data), h("view", {
      class: "item",
      onTap: this.copy,
      "data-tap-uid": "e35_26",
      "data-beacon-uid": "default"
    }, "\u590D\u5236"), h("view", {
      class: "item",
      onTap: this.paste,
      "data-tap-uid": "e36_27",
      "data-beacon-uid": "default"
    }, "\u7C98\u8D34"), h("view", {
      class: "item"
    }, this.state.copy));;
  },
  classUid: "c881"
}, {});
Page(React.registerPage(P, "pages/apis/clipboard/index"));
export default P;