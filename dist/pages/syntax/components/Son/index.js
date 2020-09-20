import React from "../../../../ReactWX.js";

function Son() {}

Son = React.toClass(Son, React.Component, {
  componentDidMount: function () {
    /* eslint-disable */
    console.log('Son did mount!');
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "son"
    }, "\u6700\u5185\u5C42\u7EC4\u4EF6");;
  },
  classUid: "c328"
}, {});
Component(React.registerComponent(Son, "Son"));
export default Son;