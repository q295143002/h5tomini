// eslint-disable-next-line
import React from "../../../../ReactWX.js";

function Fish(props) {
  var h = React.createElement;
  return h("view", {
    class: "anu-block"
  }, h("view", {
    class: "justify-content: flex-start "
  }, "Fish[", props.id, "]:", props.content));;
}

Component(React.registerComponent(Fish, "Fish"));
export default Fish;