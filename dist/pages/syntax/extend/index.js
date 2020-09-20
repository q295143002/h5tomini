import React from "../../../ReactWX.js";

function P(props) {
  this.state = {
    age: 12
  };
}

P = React.toClass(P, React.Component, {
  changeAge: function (e) {
    this.setState({
      age: Number(e.target.value)
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u7C7B\u7EE7\u627F\u7684\u6F14\u793A"), h("view", null, h("input", {
      onInput: this.changeAge.bind(this),
      value: this.state.age,
      "data-input-uid": "e23_24",
      "data-beacon-uid": "default"
    })), h(React.useComponent, {
      name: "ruby",
      age: this.state.age,
      is: "Dog",
      "data-instance-uid": 'i27_16_' + 0
    }));;
  },
  classUid: "c837"
}, {});
Page(React.registerPage(P, "pages/syntax/extend/index"));
export default P;