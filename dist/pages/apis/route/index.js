import React from "../../../ReactWX.js";

function Data() {
  this.state = {
    data: '1234455',
    copy: ''
  };
}

/* eslint-disable */
// 事件
Data = React.toClass(Data, React.Component, {
  redirectTo: function () {
    React.api.redirectTo({
      url: '/pages/platform/about/index?param1=hello&param2=world'
    });
  },
  navigateBack: function () {
    React.api.navigateBack();
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "col"
    }, h("view", {
      onTap: this.redirectTo,
      class: "anu-item",
      "data-tap-uid": "e30_13",
      "data-beacon-uid": "default"
    }, h("text", null, "\u9875\u9762\u8DF3\u8F6C(redirectTo)")), h("view", {
      onTap: this.navigateBack,
      class: "anu-item",
      "data-tap-uid": "e33_13",
      "data-beacon-uid": "default"
    }, h("text", null, "\u9875\u9762\u56DE\u9000(navigateBack)")));;
  },
  classUid: "c788"
}, {});
Page(React.registerPage(Data, "pages/apis/route/index"));
export default Data;