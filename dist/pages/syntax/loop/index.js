import React from "../../../ReactWX.js";

function P() {
  this.state = {
    array: [{
      name: '狗1'
    }, {
      name: '狗2'
    }, {
      name: '狗3'
    }, {
      name: '狗4'
    }]
  };
}

P = React.toClass(P, React.Component, {
  changeNumbers: function () {
    // eslint-disable-next-line
    var array = this.state.array.concat();
    array.push({
      name: '狗' + (new Date() - 0)
    });
    this.setState({
      array: array
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", {
      onTap: this.changeNumbers.bind(this),
      "data-tap-uid": "e38_21",
      "data-beacon-uid": "default"
    }, "\u6F14\u793A\u5355\u91CD\u5FAA\u73AF\uFF0C\u70B9\u8FD9\u91CC\u6539\u53D8\u6570\u7EC4\u7684\u4E2A\u6570"), h("view", {
      class: "anu-block"
    }, this.state.array.map((el, i992) => h(React.useComponent, {
      name: el.name,
      key: el.name,
      is: "Dog",
      "data-instance-uid": 'i43_24_' + i992
    }))));;
  },
  classUid: "c1263"
}, {});
Page(React.registerPage(P, "pages/syntax/loop/index"));
export default P;