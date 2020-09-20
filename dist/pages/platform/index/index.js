import React from "../../../ReactWX.js";

function P() {
  this.state = {
    indexPageIcons: [{
      class: 'radius-top-left',
      bizTitle: 'API',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/hotel2.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/apis/index/index'
    }, {
      class: '',
      bizTitle: '内置组件',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/flight1.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/native/index/index'
    }, {
      class: 'radius-top-right',
      bizTitle: '语法',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/train2.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/syntax/index/index'
    }, {
      class: '',
      bizTitle: '车票搜索',
      businessUrl: '/common/pages/search/index?from=home&bizType=bus',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/bus1.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/platform/ticketSearch/index'
    }, {
      class: '',
      bizTitle: '日期选择',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/car1.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/platform/calendar/index'
    }, {
      class: '',
      bizTitle: '船票',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/ship1.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/platform/boat/index'
    }, {
      class: 'radius-bottom-left',
      bizTitle: '瀑布流',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/vacation2.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/platform/cardList/index'
    }, {
      class: '',
      bizTitle: '景点·门票',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/ticket1.png',
      showSpecialLogo: false,
      specialText: '',
      url: '/pages/platform/scenic/index'
    }, {
      class: 'radius-bottom-right',
      bizTitle: '攻略',
      logoSrc: 'https://s.qunarzz.com/wechatapp/home/business/travel2.png',
      showSpecialLogo: false,
      specialText: 'if测试',
      url: '/pages/platform/strategy/index'
    }],
    toolData: [{
      url: 'https://source.qunarzz.com/site/images/wap/home/recommend/dainifei.png',
      title: '带你飞'
    }, {
      url: 'https://s.qunarzz.com/wechatapp/home/toolbars/book.png',
      title: '旅行账本'
    }, {
      url: 'https://source.qunarzz.com/site/images/wap/home/recommend/xingchengzhushou.png',
      title: '行程助手'
    }, {
      url: 'https://source.qunarzz.com/site/images/wap/home/recommend/hangbandongtai.png',
      title: '航班动态'
    }],
    specialOfferData: [{
      url: 'http://s.qunarzz.com/wechatapp/home/special/flight.jpg',
      title: '特价机票'
    }, {
      url: 'http://s.qunarzz.com/wechatapp/home/special/ticket.jpg',
      title: '优惠门票'
    }, {
      url: 'http://s.qunarzz.com/wechatapp/home/special/vacation.jpg',
      title: '旅行特价'
    }, {
      url: 'http://s.qunarzz.com/wechatapp/home/special/flight.jpg',
      title: '特价机票1'
    }, {
      url: 'http://s.qunarzz.com/wechatapp/home/special/ticket.jpg',
      title: '优惠门票1'
    }, {
      url: 'http://s.qunarzz.com/wechatapp/home/special/vacation.jpg',
      title: '旅行特价1'
    }]
  };
}

/*eslint-disable*/
P = React.toClass(P, React.Component, {
  gotoSome: function (url) {
    console.log('url', url);

    if (url) {
      React.api.navigateTo({
        url
      });
    } else {
      this.showTip();
    }
  },
  componentDidMount: function () {
    // eslint-disable-next-line
    console.log('page did mount!');
  },
  componentWillMount: function () {
    // eslint-disable-next-line
    console.log('page will mount!');
  },
  showTip: function () {
    React.api.showModal({
      title: '提示',
      content: '该部分仅展示，无具体功能!',
      showCancel: false
    });
  },
  onShareAppMessage: function (res) {
    return {
      title: '标题',
      path: 'http://www.example.com',
      success: function (data) {
        React.api.showToast({
          title: 'handling success'
        });
        console.log('handling success');
      },
      fail: function (data, code) {
        React.api.showToast({
          title: "code=" + code + ", " + data
        });
        console.log("code=" + code + ", " + data);
      }
    };
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "demo-page"
    }, h("image", {
      mode: "aspectFit",
      class: "top-image",
      src: "https://s.qunarzz.com/wechatapp/home/banner0510-002.png"
    }), h("view", {
      class: "nav-wrapper c-flex"
    }, this.state.indexPageIcons.map(function (item, i6481) {
      return h("view", {
        class: "item-wrapper",
        key: item.bizTitle,
        onTap: this.gotoSome.bind(this, item.url),
        "data-tap-uid": 'e188_30_' + i6481,
        "data-beacon-uid": "default"
      }, h("image", {
        src: item.logoSrc,
        class: "itemBgc " + item.class
      }), h("text", {
        class: "title"
      }, item.bizTitle), item.showSpecialLogo && item.specialText.length ? h("view", {
        class: "special-text"
      }, item.specialText) : '');
    }, this)), h("view", {
      class: "tool-wrapper"
    }, this.state.toolData.map(function (item, i7391) {
      return h("view", {
        onTap: this.showTip,
        class: "tool-item",
        key: item.title,
        "data-tap-uid": 'e204_31_' + i7391,
        "data-beacon-uid": "default"
      }, h("image", {
        class: "image",
        src: item.url
      }), h("text", {
        class: "text"
      }, item.title));
    }, this)), h("view", {
      class: "special-offer anu-block"
    }, h("text", {
      class: "title"
    }, "\u7279\u4EF7\u4E13\u533A"), h("swiper", {
      class: "special-offer-wrapper",
      interval: 2500,
      autoplay: true,
      displayMultipleItems: 3,
      previousmargin: "34%",
      nextmargin: "34%"
    }, this.state.specialOfferData.map(function (item, i8223) {
      return h("swiper-item", {
        onTap: this.showTip,
        key: item.title,
        class: "special-offer-item anu-block",
        "data-tap-uid": 'e223_47_' + i8223,
        "data-beacon-uid": "default"
      }, h("image", {
        class: "special-offer-image",
        src: item.url
      }), h("text", {
        class: "special-offer-text"
      }, item.title));
    }, this))), h("view", {
      class: "activity anu-block"
    }, h("text", {
      class: "title"
    }, "\u6D3B\u52A8\u4E13\u533A"), h("view", {
      class: "activity-wrapper"
    }, h("view", {
      onTap: this.showTip,
      class: "left-content",
      "data-tap-uid": "e234_27",
      "data-beacon-uid": "default"
    }, h("image", {
      class: "image",
      src: "https://img1.qunarzz.com/order/comp/1808/c3/dda9c77c3b1d8802.png"
    }), h("view", {
      class: "activity-content"
    }, h("text", null, h("text", {
      class: "title"
    }, "\u4F55\u65F6\u98DE"), h("text", {
      class: "desc"
    }, "\u673A\u7968\u8D8B\u52BF\u65E9\u77E5\u9053")))), h("view", {
      class: "right-content"
    }, h("view", {
      onTap: this.showTip,
      class: "right-content-wrapper first-child",
      "data-tap-uid": "e244_31",
      "data-beacon-uid": "default"
    }, h("image", {
      class: "image",
      src: "https://img1.qunarzz.com/order/comp/1808/3b/fd717d94ed8b6102.jpg"
    }), h("view", {
      class: "activity-content"
    }, h("text", {
      class: "title"
    }, "\u4EBA\u683C\u6D4B\u8BD5"), h("text", {
      class: "desc"
    }, "\u7B80\u76F4\u60CA\u609A"))), h("view", {
      onTap: this.showTip,
      class: "right-content-wrapper",
      "data-tap-uid": "e254_31",
      "data-beacon-uid": "default"
    }, h("image", {
      class: "image",
      src: "https://img1.qunarzz.com/order/comp/1806/1c/61cd118da20ec702.jpg"
    }), h("view", {
      class: "activity-content anu-block"
    }, h("text", {
      class: "title"
    }, "\u98DE\u884C\u5B9D\u8D1D"), h("text", {
      class: "desc"
    }, "\u699C\u5355\u6709\u793C")))))));;
  },
  classUid: "c10709"
}, {});
P.config = {
  backgroundColor: '#fff',
  navigationBarBackgroundColor: '#feb64e',
  navigationBarTitleText: 'Qunar',
  navigationBarTextStyle: 'white'
};
Page(React.registerPage(P, "pages/platform/index/index"));
export default P;