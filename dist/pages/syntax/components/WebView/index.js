import React from "../../../../ReactWX.js";

function WebView(props) {
  this.state = {
    src: ''
  };
}

WebView = React.toClass(WebView, React.Component, {
  componentDidMount: function () {
    this.setState({
      src: this.props.src
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", null, this.state.src ? h("web-view", {
      src: this.state.src
    }) : h("text", null, "111"));;
  },
  classUid: "c562"
}, {});
Component(React.registerComponent(WebView, "WebView"));
export default WebView;