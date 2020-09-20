import React from "../../../ReactWX.js";

function P() {}

P = React.toClass(P, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "React Hooks,useState, useEffect, useContext"), h(React.useComponent, {
      initCount: 0,
      count: 0,
      is: "Counter",
      "data-instance-uid": 'i10_16_' + 0
    }));;
  },
  classUid: "c477"
}, {});
Page(React.registerPage(P, "pages/syntax/hooks/index"));
export default P;