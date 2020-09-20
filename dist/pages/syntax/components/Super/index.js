import React from "../../../../ReactWX.js";

function Super() {}

Super = React.toClass(Super, React.Component, {
  componentDidMount: function () {
    /* eslint-disable */
    console.log('Super did mount!');
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "super"
    }, h("view", {
      class: "title"
    }, "\u6700\u5916\u5C42\u7EC4\u4EF6"), h(React.useComponent, {
      is: "Parent",
      "data-instance-uid": 'i17_4_' + 0
    }));;
  },
  classUid: "c468"
}, {});
Component(React.registerComponent(Super, "Super"));
export default Super;