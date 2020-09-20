import React from "../../../../ReactWX.js";

function Parent() {}

Parent = React.toClass(Parent, React.Component, {
  componentDidMount: function () {
    /* eslint-disable */
    console.log('Parent did mount!');
  },
  componentWillUnmount: function () {
    /* eslint-disable */
    console.log('Parent will unmount!');
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "parent"
    }, h("view", {
      class: "title"
    }, "\u7B2C\u4E8C\u5C42\u7EC4\u4EF6"), h(React.useComponent, {
      is: "Son",
      "data-instance-uid": 'i21_4_' + 0
    }));;
  },
  classUid: "c553"
}, {});
Component(React.registerComponent(Parent, "Parent"));
export default Parent;