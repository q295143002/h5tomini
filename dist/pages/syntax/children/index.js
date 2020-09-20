import React from "../../../ReactWX.js";

function P() {
  this.state = {
    hidden: true
  };
}

P = React.toClass(P, React.Component, {
  toggleDialog: function () {
    // eslint-disable-next-line
    this.setState({
      hidden: !this.state.hidden
    });
  },
  closeDialog: function () {
    this.setState({
      hidden: true
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u6F14\u793A\u7EC4\u4EF6\u6807\u7B7E\u5305\u542B\u5176\u4ED6\u5185\u5BB9"), h("view", {
      hidden: this.state.hidden
    }, h(React.useComponent, {
      is: "Dialog",
      "data-instance-uid": 'i28_20_' + 0
    }, h("view", null, this.state.title), h("view", null, "\u5F39\u7A97\u5176\u4ED6\u5185\u5BB91"), h("view", null, "\u5F39\u7A97\u5176\u4ED6\u5185\u5BB92"), h("view", null, h("button", {
      type: "default",
      size: "mini",
      onTap: this.closeDialog.bind(this),
      "data-tap-uid": "e36_32",
      "data-beacon-uid": "default"
    }, "\u5173\u95ED")))), h("view", null, h("button", {
      type: "primary",
      onTap: this.toggleDialog.bind(this),
      "data-tap-uid": "e44_43",
      "data-beacon-uid": "default"
    }, "\u70B9\u6211")));;
  },
  classUid: "c1509"
}, {});
Page(React.registerPage(P, "pages/syntax/children/index"));
export default P;