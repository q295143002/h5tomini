// eslint-disable-next-line
import React from "../../../../ReactWX.js";

function Count(props) {
  var h = React.createElement;
  return h("view", null, props.a, "+", props.b, "=", props.a + props.b);;
}

Component(React.registerComponent(Count, "Count"));
export default Count;