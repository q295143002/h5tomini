import React from "../../../ReactWX.js";

function P() {
  this.state = {
    a: 111,
    b: 222,
    styles: {
      a: {
        border: '1px solid red'
      }
    }
  };
}

P = React.toClass(P, React.Component, {
  changeA: function (e) {
    this.setState({
      a: ~~e.target.value
    });
  },
  changeB: function (e) {
    this.setState({
      b: ~~e.target.value
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", {
      class: "anu-page-header",
      style: React.toStyle(this.state.styles.a, this.props, 'style1363')
    }, "\u65E0\u72C0\u6001\u7EC4\u4EF6"), h("view", {
      class: "anu-block"
    }, h("view", null, "\u8F93\u5165a(\u7ED1\u5B9AonInput\u4E8B\u4EF6,\u7BAD\u5934\u51FD\u6570)"), h("input", {
      type: "number",
      style: "border: 1px solid gray;width:50%",
      value: this.state.a,
      onInput: e => this.changeA(e),
      "data-input-uid": "e37_24",
      "data-beacon-uid": "default"
    })), h("view", {
      class: "anu-block"
    }, h("view", null, "\u8F93\u5165b(\u7ED1\u5B9AonChange\u4E8B\u4EF6,\u7BAD\u5934\u51FD\u6570)"), h("input", {
      type: "number",
      style: "border: 1px solid gray;width:50%",
      value: this.state.b,
      onInput: e => this.changeB(e),
      "data-input-uid": "e46_24",
      "data-beacon-uid": "default"
    })), h("view", null, h(React.useComponent, {
      a: this.state.a,
      b: this.state.b,
      is: "Count",
      "data-instance-uid": 'i50_20_' + 0
    })));;
  },
  classUid: "c1687"
}, {});
Page(React.registerPage(P, "pages/syntax/stateless/index"));
export default P;