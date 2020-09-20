import React from "../../../ReactWX.js";

function P() {
  this.state = {
    list: 'fillStyle,arc,strokeStyle,textBaseline,rect,globalAlpha'.split(',').map(function (name) {
      return {
        url: '/pages/apis/canvas' + "/" + name + "/index",
        name: name
      };
    })
  };
}

// import '../../../../pages/demo/apis/canvas/setStrokeStyle'

/* eslint-disable */
// 事件
P = React.toClass(P, React.Component, {
  componentDidMount: function () {// const ctx = React.api.createCanvasContext('myCanvas', this);
  },
  gotoSome: function (url) {
    console.log('url', url);

    if (url) {
      React.api.navigateTo({
        url
      });
    }
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, this.state.list.map(function (item, i756) {
      return h("view", {
        className: "anu-item",
        onTap: this.gotoSome.bind(this, item.url),
        "data-tap-uid": 'e36_38_' + i756,
        "data-beacon-uid": "default"
      }, h("text", null, item.name));
    }, this));;
  },
  classUid: "c1151"
}, {});
Page(React.registerPage(P, "pages/apis/canvas/index"));
export default P;