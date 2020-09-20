// eslint-disable-next-line
import React from "../../../../ReactWX.js";
import Animal from "../../../../components/Animal/index";

function Dog() {}

Dog = React.toClass(Dog, Animal, {
  componentWillMount: function () {
    // eslint-disable-next-line
    console.log('Dog componentWillMount');
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block",
      style: React.toStyle({
        border: '1px solid #333'
      }, this.props, 'style672')
    }, h("text", null, "\u540D\u5B57\uFF1A", this.state.name, "\u5E74\u9F84\uFF1A", this.state.age, "\u5C81"), h("button", {
      catchTap: this.changeAge.bind(this),
      "data-tap-uid": "e15_24",
      "data-beacon-uid": "default"
    }, "\u6362\u4E00\u4E2A\u5E74\u9F84"));;
  },
  classUid: "c685"
}, {});
Component(React.registerComponent(Dog, "Dog"));
export default Dog;