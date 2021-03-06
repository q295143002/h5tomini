import React from "../../../ReactWX.js";

function P() {
  this.state = {
    menu: [{
      title: '全部订单',
      isArrow: true
    }, {
      title: '会员中心',
      isArrow: true
    }, {
      title: '优惠券',
      isArrow: true
    }, {
      title: '常用旅客',
      isArrow: true
    }, {
      title: '联系客服',
      isArrow: true
    }, {
      title: '退出登录',
      isArrow: false
    }]
  };
}

P = React.toClass(P, React.Component, {
  menuItemClick: function (type) {
    switch (type) {
      case 0:
        this.fun_tip();
        break;

      case 1:
        this.fun_tip();
        break;

      case 2:
        this.fun_tip();
        break;

      case 3:
        this.fun_tip();
        break;

      case 4:
        React.api.showModal({
          title: '请拨打客服电话',
          content: '95117',
          showCancel: true,
          cancelColor: '#69c0ff',
          confirmText: '拨打',
          confirmColor: '#69c0ff'
        });
        break;

      case 5:
        React.api.showModal({
          title: '确认退出登录',
          showCancel: true,
          confirmColor: '#73d13d'
        });
        break;

      default:
        break;
    }
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
      class: "user-center"
    }, h("view", {
      class: "user-information anu-line"
    }, h("image", {
      src: "https://s.qunarzz.com/wechatapp/common/images/my/unLogin.png",
      class: "user-image"
    }), h("text", {
      class: "user-name"
    }, "\u6388\u6743\u767B\u5F55")), h("view", {
      class: "qunar-information anu-line"
    }, h("view", {
      class: "font-27"
    }, "\u5173\u6CE8\u516C\u4F17\u53F7"), h("view", {
      class: "right-content"
    }, h("text", {
      class: "right-message font-27"
    }, "\u53BB\u5173\u6CE8"), h("image", {
      class: "right-content-image",
      src: "../../../assets/image/arrow.png"
    }))), this.state.menu.map(function (item, index) {
      return h("view", {
        onTap: this.menuItemClick.bind(this, index),
        class: "menu-item anu-line",
        "data-tap-uid": 'e95_33_' + index,
        "data-beacon-uid": "default"
      }, h("text", {
        class: 'menu-item-title' + (item.isArrow ? '' : 'high-light')
      }, item.title), item.isArrow ? h("image", {
        className: "menu-item-image",
        src: "../../../assets/image/arrow.png"
      }) : '');
    }, this));;
  },
  classUid: "c3556"
}, {});
P.config = {
  backgroundColor: '#fff',
  navigationBarBackgroundColor: '#fff',
  navigationBarTitleText: '个人中心',
  navigationBarTextStyle: 'black'
};
Page(React.registerPage(P, "pages/platform/userCenter/index"));
export default P;