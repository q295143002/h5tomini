// eslint-disable-next-line
import React from "../../../../ReactWX.js";
/* eslint no-console: 0 */

function Label(props) {
  console.log('label', props);
  this.state = {
    value: props.children
  };
}

Label = React.toClass(Label, React.Component, {
  componentWillReceiveProps: function (nextProps) {
    console.log('nextProps', nextProps);
    this.setState({
      value: nextProps.children
    });
  },
  click: function (e) {
    var props = this.props;
    Array('onTap', 'catchTap', 'onClick', 'catchClick').forEach(function (name) {
      var fn = props[name];

      if (fn) {
        fn(e);

        if (name == 'catchTap' || name == '"catchClick"') {
          e.stopPropagation();
        }
      }
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      onTap: this.click.bind(this),
      "data-tap-uid": "e36_17",
      "data-beacon-uid": "default"
    }, h("text", null, this.state.value));;
  },
  classUid: "c1094"
}, {});
Component(React.registerComponent(Label, "Label"));
export default Label;