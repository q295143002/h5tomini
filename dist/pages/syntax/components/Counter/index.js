// eslint-disable-next-line
import React from "../../../../ReactWX.js";

function Counter(props) {
  var h = React.createElement;
  const [count, setCount] = React.useState(props.count);
  props.count = count; //数据必须加到props或state上

  return h("view", null, "Count:", props.count, h("button", {
    onTap: () => {
      setCount(props.initCount);
    },
    "data-tap-uid": "e10_16",
    "data-beacon-uid": "default"
  }, "Reset"), h("button", {
    onTap: () => {
      setCount(prevCount => prevCount + 1);
    },
    "data-tap-uid": "e13_16",
    "data-beacon-uid": "default"
  }, "+"), h("button", {
    onTap: () => {
      setCount(prevCount => prevCount - 1);
    },
    "data-tap-uid": "e16_16",
    "data-beacon-uid": "default"
  }, "-"));;
}

Component(React.registerComponent(Counter, "Counter"));
export default Counter;