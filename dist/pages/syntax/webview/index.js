import React from "../../../ReactWX.js";

function P() {
  this.state = {};
}

P = React.toClass(P, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", null, h(React.useComponent, {
      src: 'https://m.qunar.com',
      is: "WebView",
      "data-instance-uid": 'i13_16_' + 0
    }));;
  },
  classUid: "c425"
}, {});
Page(React.registerPage(P, "pages/syntax/webview/index"));
export default P;