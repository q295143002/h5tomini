import React from "../../../ReactWX.js";

function P() {
  this.state = {
    data: []
  };
}

P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    let that = this;
    React.api.showLoading({
      title: '获取资源中',
      mask: true
    });
    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/11595/qunar/cardList',
      success: function (data) {
        React.api.hideLoading();
        that.setState({
          data: data.data
        });
      }
    });
  },
  onReachBottom: function () {
    let that = this;
    React.api.showLoading({
      title: '获取资源中',
      mask: true
    });
    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/11595/qunar/cardList',
      success: function (data) {
        React.api.hideLoading();
        that.setState({
          data: [...that.state.data, ...data.data]
        });
      }
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "cardList"
    }, h("view", {
      class: "wrapper"
    }, this.state.data.map(function (item, index) {
      return index % 2 === 0 && h("view", {
        class: "item",
        key: item.text
      }, h("image", {
        src: item.image
      }), h("text", null, item.text));
    }, this)), h("view", {
      class: "wrapper"
    }, this.state.data.map(function (item, index) {
      return index % 2 !== 0 && h("view", {
        class: "item",
        key: item.text
      }, h("image", {
        src: item.image
      }), h("text", null, item.text));
    }, this)));;
  },
  classUid: "c2531"
}, {});
P.config = {
  backgroundColor: '#eee',
  navigationBarBackgroundColor: '#fff',
  navigationBarTitleText: '瀑布流',
  navigationBarTextStyle: 'black',
  enablePullDownRefresh: true,
  onReachBottomDistance: 50
};
Page(React.registerPage(P, "pages/platform/cardList/index"));
export default P;