import React from "../../../ReactWX.js";

function P() {
  this.state = {
    data: []
  };
}

P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    let that = this; // React.api.showLoading({
    //     title: '获取资源中',
    //     mask: true
    // });

    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/11595/qunar/scenic',
      success: function (data) {
        // React.api.hideLoading();
        // console.log('data', data.data);
        that.setState({
          data: data.data
        });
      }
    });
  },
  fun_tip: function () {
    React.api.showModal({
      title: '提示',
      content: '该部分仅展示，无具体功能!',
      showCancel: false
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "scenic"
    }, h("view", {
      class: "input-wrapper"
    }, h("view", {
      class: "input"
    }, h("input", {
      class: "n-input",
      placeholder: "\u8BF7\u8F93\u5165\u57CE\u5E02\u6216\u666F\u70B9",
      type: "text"
    }))), h("view", {
      class: "scenic-content col"
    }, this.state.data.map(function (item, i1326) {
      return h("view", {
        class: "scenic-content-item col"
      }, h("view", {
        class: "title-wrapper"
      }, h("view", {
        class: "mark"
      }), h("text", {
        class: "title"
      }, item.title)), item.data.map(function (item, index) {
        return h("view", {
          onTap: this.fun_tip.bind(this),
          class: "scenic-item",
          key: index,
          "data-tap-uid": 'e59_43_' + i1326 + '-' + index,
          "data-beacon-uid": "default"
        }, h("image", {
          class: "left-content",
          src: item.url
        }), h("view", {
          class: "right-content"
        }, h("view", {
          class: "col"
        }, h("text", {
          class: "scenic-name"
        }, item.name), h("text", {
          class: "desc"
        }, item.desc), h("text", {
          class: "comment"
        }, item.comment + '评论')), h("view", {
          class: "price-distance c-flex"
        }, h("text", {
          class: "price"
        }, '￥' + item.price), h("text", {
          class: "distance"
        }, item.distance + 'km'))));
      }, this));
    }, this)));;
  },
  classUid: "c3147"
}, {});
P.config = {
  backgroundColor: '#000000',
  navigationBarBackgroundColor: '#1890ff',
  navigationBarTitleText: '景点门票',
  navigationBarTextStyle: 'white'
};
Page(React.registerPage(P, "pages/platform/scenic/index"));
export default P;