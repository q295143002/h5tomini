import React from "../../../ReactWX.js";

function P() {
  this.state = {
    title: "内置组件",
    array: "button,checkbox,input,slider,picker,radio,textarea,label,audio,camera,image,video".split(",").map(function (name) {
      return {
        url: "/pages/native" + "/" + name + "/index",
        name: name
      };
    })
  };
}

/*eslint-disable*/
P = React.toClass(P, React.Component, {
  componentWillMount: function () {
    // eslint-disable-next-line
    console.log("native componentWillMount");
  },
  componentDidMount: function () {
    // eslint-disable-next-line
    console.log("native componentDidMount");
  },
  gotoSome: function (url) {
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
    }, h("view", {
      class: "anu-page-header"
    }, this.state.title), this.state.array.map(function (item, i1299) {
      return h("view", {
        class: "anu-item"
      }, h("view", {
        onTap: this.gotoSome.bind(this, item.url),
        "open-type": "navigate",
        "hover-class": "navigator-hover",
        url: item.url,
        "data-tap-uid": 'e50_32_' + i1299,
        "data-beacon-uid": "default"
      }, item.name));
    }, this));;
  },
  classUid: "c1916"
}, {});
P.config = {
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#0088a4",
  navigationBarTitleText: "内置组件",
  backgroundColor: "#ffe",
  backgroundTextStyle: "light"
};
Page(React.registerPage(P, "pages/native/index/index"));
export default P;