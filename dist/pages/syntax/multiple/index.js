import React from "../../../ReactWX.js";

function P() {}

P = React.toClass(P, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "mouti-compoent-wrapper"
    }, h(React.useComponent, {
      is: "Super",
      "data-instance-uid": 'i10_16_' + 0
    }));;
  },
  classUid: "c379"
}, {});
Page(React.registerPage(P, "pages/syntax/multiple/index"));
export default P;