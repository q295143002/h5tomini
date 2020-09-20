import React from "../../../ReactWX.js";

function P() {
  this.state = {
    condition1: true,
    condition2: true
  };
}

/* eslint no-console: 0 */
P = React.toClass(P, React.Component, {
  toggleCondition2: function () {
    console.log('Condition2');
    this.setState({
      condition2: !this.state.condition2
    });
  },
  toggleCondition1: function () {
    console.log('Condition1');
    this.setState({
      condition1: !this.state.condition1
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u6539\u52A8React\u6E90\u7801\u7684onBeforeRender\u76F8\u5173\u90E8\u5206"), h("view", null, this.state.condition2 ? h(React.useComponent, {
      onTap: this.toggleCondition2.bind(this),
      class: "btn",
      is: "Label",
      "data-instance-uid": 'i36_24_' + 0
    }, "Inactive Condition2") : h(React.useComponent, {
      onTap: this.toggleCondition2.bind(this),
      class: "btn",
      is: "Label",
      "data-instance-uid": 'i38_24_' + 0
    }, "Active Condition2")));;
  },
  classUid: "c1262"
}, {});
Page(React.registerPage(P, "pages/syntax/ifcom/index"));
export default P;