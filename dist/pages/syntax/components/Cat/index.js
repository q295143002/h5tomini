// eslint-disable-next-line
import React from "../../../../ReactWX.js";

function Cat(props) {
  var h = React.createElement;
  return h("view", {
    class: "anu-block"
  }, h("view", {
    class: "justify-content: flex-end "
  }, props.content, ":Cat[", props.id, "]"));;
}

Component(React.registerComponent(Cat, "Cat"));
export default Cat;