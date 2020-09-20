import React from "./ReactWX.js";

function Global(...args) {
  this.globalData = {
    ufo: 'ufo',
    buildType: "wx"
  };
}

Global = React.toClass(Global, React.Component, {
  onCollectLogs: function (dataset, type, node) {
    var page = React.getCurrentPage();

    if (!page) {
      return;
    }

    var path = page.props.path;
    var uuid = dataset.beaconUid;

    if (node) {
      var xpath = [];

      while (node.parentNode) {
        var index = node.parentNode.children.indexOf(node);
        xpath.unshift(index);
        node = node.parentNode;
      }

      uuid = xpath.join('/');
    }

    console.log('收集日志', path, type, uuid); //eslint-disable-line
  },
  onGlobalShow: function () {
    console.log(React.getCurrentPage().props.path, 'onGlobalShow'); //eslint-disable-line
  },
  onGlobalLoad: function () {},
  onShowMenu: function (pageInstance, app) {},
  onLaunch: function () {
    //针对快应用的全局getApp补丁
    console.log('App launched'); //eslint-disable-line
  },
  classUid: "c8744"
}, {}); //这样写相当于为每一个页面组件的外面都加上一个<Provider />，如果你想在页面上用到store里的数据，
//需要用react-redux的connect方法包一下，详见pages/syntax/redux
// React.applyAppStore(store);
// eslint-disable-next-line

Global.config = {
  window: {
    backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#0088a4',
    navigationBarTitleText: 'mpreact',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#929292',
    selectedColor: '#00bcd4',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [{
      pagePath: 'pages/platform/index/index',
      iconPath: '/assets/image/homepage_normal.png',
      selectedIconPath: '/assets/image/homepage_select.png',
      text: '首页'
    }, {
      pagePath: 'pages/platform/question/index/index',
      iconPath: '/assets/image/question_normal.png',
      selectedIconPath: '/assets/image/question_select.png',
      text: '问答社区'
    }, {
      pagePath: 'pages/platform/userCenter/index',
      iconPath: '/assets/image/uc_normal.png',
      selectedIconPath: '/assets/image/uc_select.png',
      text: '我的'
    }]
  }
};
export default App(new Global());