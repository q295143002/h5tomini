// eslint-disable-next-line
import React from "../../../../ReactWX.js";

function Dialog(props) {
  var h = React.createElement;
  return h("view", {
    class: "anu-block",
    style: "background-color:#f3f3f3;border:2px solid #dadada;margin:3px;"
  }, h("view", {
    class: "anu-block"
  }, props.children), h(React.useComponent, {
    a: 2018,
    b: 19,
    is: "Count",
    "data-instance-uid": 'i9_12_' + 0
  }));;
}

Component(React.registerComponent(Dialog, "Dialog"));
export default Dialog;