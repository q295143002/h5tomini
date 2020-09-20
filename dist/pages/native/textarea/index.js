import React from "../../../ReactWX.js";

function P() {
  this.state = {
    focus: false
  };
}

P = React.toClass(P, React.Component, {
  bindTextAreaBlur: function (e) {
    // eslint-disable-next-line
    console.log(e.value);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "page-body column-layout"
    }, h("view", {
      class: "page-section column-layout"
    }, h("view", {
      class: "page-section-title"
    }, "\u8F93\u5165\u533A\u57DF\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6EDA\u52A8\u6761"), h("view", {
      class: "textarea-wrp"
    }, h("textarea", {
      onBlur: this.bindTextAreaBlur,
      autoHeight: true,
      "data-blur-uid": "e24_34",
      "data-beacon-uid": "default"
    }))), h("view", {
      class: "page-section column-layout"
    }, h("view", {
      class: "page-section-title"
    }, "\u8FD9\u662F\u4E00\u4E2A\u53EF\u4EE5\u81EA\u52A8\u805A\u7126\u7684textarea"), h("view", {
      class: "textarea-wrp"
    }, h("textarea", {
      autoFocus: true,
      style: "height: 200rpx"
    }))));;
  },
  classUid: "c1189"
}, {});
Page(React.registerPage(P, "pages/native/textarea/index"));
export default P;