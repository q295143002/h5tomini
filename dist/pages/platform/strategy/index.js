import React from "../../../ReactWX.js";

function P(props) {
  this.state = {
    data: []
  };
}

P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    let that = this;
    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/11595/qunar/strategy',
      success: function (res) {
        if (Array.isArray(res.data)) {
          that.setState({
            data: res.data
          });
        }
      },
      fail: function (e) {
        console.log(e, 'fail');
      }
    });
  },
  showTip: function () {
    React.api.showModal({
      title: '提示',
      content: '该部分仅展示，无具体功能!',
      showCancel: false
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "strategy-page"
    }, this.state.data.map(function (item, i1027) {
      return h("view", {
        key: item.desc,
        onTap: this.showTip.bind(this),
        class: "strategy-item col",
        "data-tap-uid": 'e45_43_' + i1027,
        "data-beacon-uid": "default"
      }, h("image", {
        class: "big-image",
        src: item.bigImage
      }), h("view", {
        class: "strategy-item-content"
      }, h("view", {
        class: "col"
      }, h("text", {
        class: "desc fontColor"
      }, item.desc), h("text", {
        class: "date fontColor"
      }, item.date)), h("view", {
        class: "user-wrapper"
      }, h("view", {
        class: "user-image"
      }, h("image", {
        class: "image",
        mode: "scaleToFill",
        src: item.userImage
      })), h("text", {
        class: "user-name fontColor"
      }, item.userName))));
    }, this));;
  },
  classUid: "c2151"
}, {});
P.config = {
  backgroundColor: '#ffffff',
  navigationBarBackgroundColor: '#fa541c',
  navigationBarTitleText: '去哪儿攻略',
  navigationBarTextStyle: '#d5d6d6'
};
Page(React.registerPage(P, "pages/platform/strategy/index"));
export default P;