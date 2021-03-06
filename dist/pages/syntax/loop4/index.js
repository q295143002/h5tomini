import React from "../../../ReactWX.js";
// eslint-disable-next-line
var type = "Cat";

function P() {
  this.state = {
    input: '',
    idCounter: 3,
    msgList: [{
      id: 0,
      type: 'Cat',
      content: '我的蛙儿子到现在都没回家'
    }, {
      id: 1,
      type: 'Fish',
      content: '你中毒已深'
    }, {
      id: 2,
      type: 'Cat',
      content: '他该不会嫌弃他母亲穷，在外面有家了吧？'
    }, {
      id: 3,
      type: 'Fish',
      content: '应该没有这种操作吧？'
    }, {
      id: 4,
      type: 'Cat',
      content: '难不成被贝爷吃了？'
    }, {
      id: 4,
      type: 'Fish',
      content: '那一定是你没有为他买幸运铃！'
    }]
  };
}

P = React.toClass(P, React.Component, {
  sendMsg: function () {
    if (!this.state.value) {
      // eslint-disable-next-line
      console.warn('没有内容');
      return;
    }

    let msgList = [...this.state.msgList];
    let id = this.state.idCounter + 1;
    msgList.push({
      id: id + '',
      type: type,
      content: this.state.value
    });
    this.setState({
      value: '',
      msgList,
      idCounter: id
    });
  },
  onSelect: function (e) {
    type = e.detail.value || e.target.value;
  },
  onChange: function (e) {
    this.setState({
      value: e.target.value
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u5FAA\u73AF\u91CC\u9762\u4EA4\u66FF\u4F7F\u7528\u4E24\u5229\u4E0D\u540C\u7684\u7EC4\u4EF6"), h("view", {
      class: "anu-block"
    }, this.state.msgList.map(function (msg, i2048) {
      return h("view", {
        class: "anu-block",
        key: msg.id
      }, msg.type === 'Cat' && h(React.useComponent, {
        id: msg.id,
        content: msg.content,
        is: "Cat",
        "data-instance-uid": 'i84_36_' + i2048
      }), msg.type === 'Fish' && h(React.useComponent, {
        id: msg.id,
        content: msg.content,
        is: "Fish",
        "data-instance-uid": 'i87_36_' + i2048
      }));
    }, this)), h("radio-group", {
      class: "radio-group",
      onChange: this.onSelect.bind(this),
      "data-change-uid": "e93_49",
      "data-beacon-uid": "default"
    }, h("radio", {
      value: "Cat"
    }), "Cat", h("radio", {
      value: "Fish"
    }), "Fish"), h("textarea", {
      value: this.state.value,
      "auto-height": true,
      onInput: this.onChange.bind(this),
      style: "border:1px solid grey;",
      "data-input-uid": "e97_70",
      "data-beacon-uid": "default"
    }), h("button", {
      type: "button",
      onTap: this.sendMsg.bind(this),
      "data-tap-uid": "e98_38",
      "data-beacon-uid": "default"
    }, "\u6DFB\u52A0"));;
  },
  classUid: "c3297"
}, {});
Page(React.registerPage(P, "pages/syntax/loop4/index"));
export default P;