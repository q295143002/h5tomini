import React from "../../ReactWX.js";

const noop = function () {};

function Navigator(props) {
  if (typeof props.children !== 'string') {
    console.warn('<Navigator>组件的内容暂时只能传字符串，不能放标签'); //eslint-disable-line
  }

  this.state = {
    title: props.children
  };
}

Navigator = React.toClass(Navigator, React.Component, {
  componentWillReceiveProps: function (props) {
    if (this.state.title != props.children) {
      this.setState({
        title: props.children
      });
    }
  },
  goPage: function () {
    var method = this.props['open-type'];
    var hook = methodMap[method] || 'navigateTo';
    React.api[hook]({
      url: this.props.url,
      success: this.props.bindsuccess || noop,
      fail: this.props.bindfail || noop,
      complete: this.props.bindcomplete || noop
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: 'anu-navigator ' + this.props.class,
      onTap: this.goPage.bind(this),
      "data-tap-uid": "e39_62",
      "data-beacon-uid": "default"
    }, h("text", null, this.state.title));;
  },
  classUid: "c1293"
}, {});
Navigator.defaultProps = {
  target: 'self',
  url: '',
  'open-type': 'navigate',
  'hover-class': 'navigator-hover'
};
const methodMap = {
  navigate: 'navigateTo',
  redirect: 'redirectTo',
  switchTab: 'switchTab',
  reLaunch: 'reLaunch',
  'navigateBack': 'navigateBack'
};
Component(React.registerComponent(Navigator, "Navigator"));
export default Navigator;