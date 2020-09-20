import React from "../../../ReactWX.js";

function P() {
  this.state = {
    title: '',
    key: '',
    trs: [[{
      title: 'aaa'
    }, {
      title: 'bbb'
    }, {
      title: 'ccc'
    }], [{
      title: 'ddd'
    }, {
      title: 'eee'
    }, {
      title: 'fff'
    }], [{
      title: 'ggg'
    }, {
      title: 'hhh'
    }, {
      title: 'iii'
    }]]
  };
}

P = React.toClass(P, React.Component, {
  getData: function (item, e) {
    this.setState({
      title: item.title,
      key: e.target.dataset.key
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u6D4B\u8BD5\u5FAA\u73AF\u4E2D\u7684\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u4E0B\u65B9\u683C\u5B50"), h("view", null, "title:", this.state.title, '  key ', this.state.key), h("view", {
      class: "anu-block"
    }, this.state.trs.map(function (item, i) {
      return h("view", {
        class: "anu-line"
      }, item.map(function (el, j) {
        return h("view", {
          class: "loop2-cell",
          key: el.title,
          onTap: e => {
            this.getData(el, e);
          },
          "data-tap-uid": 'e43_44_' + i + '-' + j,
          "data-beacon-uid": "default"
        }, h(React.useComponent, {
          id: i * 10 + j,
          content: el.title,
          is: "Fish",
          "data-instance-uid": 'i46_44_' + i + '-' + j
        }));
      }, this));
    }, this)));;
  },
  classUid: "c1967"
}, {});
Page(React.registerPage(P, "pages/syntax/loop2/index"));
export default P;