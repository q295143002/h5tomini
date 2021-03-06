import React from "../../../ReactWX.js";

function P() {
  this.state = {
    condition1: true,
    condition2: true
  };
}

P = React.toClass(P, React.Component, {
  toggleCondition2: function () {
    this.setState({
      condition2: !this.state.condition2
    });
  },
  toggleCondition1: function () {
    this.setState({
      condition1: !this.state.condition1
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block xxx"
    }, this.state.condition1 ? this.state.condition2 ? h("view", {
      class: "anu-block"
    }, h("view", null, "Condition1 active"), h(React.useComponent, {
      onTap: this.toggleCondition1.bind(this),
      is: "YButton",
      "data-instance-uid": 'i34_32_' + 0
    }, "Inactive Condition1"), h("view", null, "Condition2 active"), h(React.useComponent, {
      onTap: this.toggleCondition2.bind(this),
      is: "YButton",
      "data-instance-uid": 'i38_32_' + 0
    }, "Inactive Condition2")) : h("view", {
      class: "anu-block"
    }, h("view", null, "Condition1 active"), h(React.useComponent, {
      onTap: this.toggleCondition1.bind(this),
      is: "YButton",
      "data-instance-uid": 'i45_32_' + 0
    }, "Inactive Condition1"), h("view", null, "Condition2 inactive"), h(React.useComponent, {
      onTap: this.toggleCondition2.bind(this),
      is: "YButton",
      "data-instance-uid": 'i49_32_' + 0
    }, "Active Condition2")) : this.state.condition2 ? h("view", {
      class: "anu-block"
    }, h("view", null, "Condition1 inactive"), h(React.useComponent, {
      onTap: this.toggleCondition1.bind(this),
      is: "YButton",
      "data-instance-uid": 'i58_32_' + 0
    }, "Active Condition1"), h("view", null, "Condition2 active"), h(React.useComponent, {
      onTap: this.toggleCondition2.bind(this),
      is: "YButton",
      "data-instance-uid": 'i62_32_' + 0
    }, "Inactive Condition2")) : h("view", {
      class: "anu-block"
    }, h("view", null, "Condition1 inactive"), h(React.useComponent, {
      onTap: this.toggleCondition1.bind(this),
      is: "YButton",
      "data-instance-uid": 'i69_32_' + 0
    }, "Active Condition1"), h("view", null, "Condition2 inactive"), h(React.useComponent, {
      onTap: this.toggleCondition2.bind(this),
      is: "YButton",
      "data-instance-uid": 'i73_32_' + 0
    }, "Active Condition2")));;
  },
  classUid: "c3359"
}, {});
Page(React.registerPage(P, "pages/syntax/if/index"));
export default P;