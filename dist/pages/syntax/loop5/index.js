import React from "../../../ReactWX.js";

function P() {
  this.state = {
    add: false
  };
}

P = React.toClass(P, React.Component, {
  add: function () {
    // eslint-disable-next-line
    this.setState({
      add: true
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", {
      onTap: this.add.bind(this),
      "data-tap-uid": "e23_21",
      "data-beacon-uid": "default"
    }, "\u70B9\u8FD9\u91CC\u6DFB\u52A0\u72D7"), h(React.useComponent, {
      name: "111",
      age: 111,
      is: "Dog",
      "data-instance-uid": 'i26_16_' + 0
    }), h(React.useComponent, {
      name: "222",
      age: 222,
      is: "Dog",
      "data-instance-uid": 'i27_16_' + 0
    }), h(React.useComponent, {
      name: "333",
      age: 333,
      is: "Dog",
      "data-instance-uid": 'i28_16_' + 0
    }), this.state.add ? h(React.useComponent, {
      name: "444",
      age: 444,
      is: "Dog",
      "data-instance-uid": 'i29_34_' + 0
    }) : null);;
  },
  classUid: "c857"
}, {});
Page(React.registerPage(P, "pages/syntax/loop5/index"));
export default P;