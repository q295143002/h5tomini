import React from "../../../../ReactWX.js";

function P() {
  this.state = {
    navBtnActiveIndex: 1,
    isQuestion: true,
    data: [],
    city: '北京'
  };
  this.colStyle = {};
}

P = React.toClass(P, React.Component, {
  navItemClick: function (navBtnActiveIndex) {
    this.setState({
      navBtnActiveIndex
    });

    if (navBtnActiveIndex === 1 || navBtnActiveIndex === 2) {
      this.getData();
    }
  },
  switchFun: function () {
    this.setState({
      isQuestion: !this.state.isQuestion
    });
  },
  getData: function () {
    let that = this; // React.api.showLoading({
    //     title: '获取资源中',
    //     mask: true
    // });

    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/11595/qunar/question',
      success: function (data) {
        // React.api.hideLoading();
        that.setState({
          data: data.data
        });
      }
    });
  },
  questionDetail: function () {
    React.api.navigateTo({
      url: '/pages/platform/question/detail/index'
    });
  },
  componentDidMount: function () {
    this.getData();
  },
  onShow: function () {
    let app = React.getApp();

    if (app.globalData.citySelect) {
      this.setState({
        city: app.globalData.citySelect
      });
    }
  },
  toCitySelect: function () {
    this.navItemClick(2);
    React.api.navigateTo({
      url: '/pages/platform/citySelect/index'
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "question"
    }, h("view", {
      class: "nav-wrapper",
      style: React.toStyle(this.colStyle, this.props, 'style3869')
    }, h("view", {
      class: " row"
    }, h("text", {
      onTap: this.navItemClick.bind(this, 0),
      class: 'nav-btn ' + (this.state.navBtnActiveIndex === 0 ? 'active' : ''),
      "data-tap-uid": "e73_26",
      "data-beacon-uid": "default"
    }, "\u6211\u7684\u95EE\u7B54"), h("text", {
      onTap: this.navItemClick.bind(this, 1),
      class: 'nav-btn ' + (this.state.navBtnActiveIndex === 1 ? 'active' : ''),
      "data-tap-uid": "e79_26",
      "data-beacon-uid": "default"
    }, "\u63A8\u8350"), h("view", {
      class: "nav-btn"
    }, h("text", {
      onTap: this.navItemClick.bind(this, 2),
      class: this.state.navBtnActiveIndex === 2 ? 'active' : '',
      "data-tap-uid": "e85_32",
      "data-beacon-uid": "default"
    }, this.state.city), h("view", {
      onTap: this.toCitySelect.bind(this),
      class: "open-icon-wrapper",
      "data-tap-uid": "e86_31",
      "data-beacon-uid": "default"
    }, this.state.navBtnActiveIndex === 2 ? h("image", {
      class: "open-icon image",
      src: "../../../../assets/image/open_select.png"
    }) : h("image", {
      class: "open-icon image",
      src: "../../../../assets/image/open.png"
    })))), h("view", {
      class: 'switch-bar ' + (this.state.navBtnActiveIndex === 1 ? 'second-choose' : this.state.navBtnActiveIndex === 0 ? 'first-choose' : 'third-choose')
    })), h("view", {
      class: "quest-content",
      style: React.toStyle(this.colStyle, this.props, 'style7395')
    }, this.state.navBtnActiveIndex === 0 && h("view", {
      class: "my-question-answer"
    }, h("view", {
      class: "tool"
    }, h("view", null, this.state.isQuestion ? '共有0个提问' : '共有0个回答'), h("view", {
      onTap: this.switchFun.bind(this),
      class: "switch-wrapper",
      "data-tap-uid": "e111_35",
      "data-beacon-uid": "default"
    }, h("view", null, this.state.isQuestion ? '切换至回答' : '切换至提问'))), h("view", {
      class: "no-data-prompt"
    }, h("image", {
      class: "image",
      src: "../../../../assets/image/order_none.png"
    }), h("view", {
      class: "message"
    }, this.state.isQuestion ? '您还没有发布过问题，去提问吧~' : '您还没有发布过回答，去回答吧~'))), (this.state.navBtnActiveIndex === 1 || this.state.navBtnActiveIndex === 2) && h("view", {
      class: "all-question",
      style: React.toStyle(this.colStyle, this.props, 'style9733')
    }, this.state.data.map(function (item, i4906) {
      return h("view", {
        onTap: this.questionDetail.bind(this),
        class: "question-item",
        "data-tap-uid": 'e129_39_' + i4906,
        "data-beacon-uid": "default",
        style: React.toStyle(this.colStyle, this.props, 'style10185' + i4906)
      }, h("view", {
        class: "quest-title"
      }, item.isRemark && h("text", {
        class: 'remark ' + (item.remark === '最新' ? 'new' : item.remark === '置顶' ? 'stick' : 'hot')
      }, item.remark), h("text", {
        class: (item.isRemark ? 'width' : '') + " title"
      }, item.title)), h("text", {
        class: "desc hide-text"
      }, item.desc), h("view", {
        class: "other-message"
      }, h("view", {
        class: "other-message-item"
      }, h("image", {
        class: "eye image",
        src: "../../../../assets/image/eye.png"
      }), h("text", {
        class: "eye-text text"
      }, item.seeNum)), h("view", {
        class: "other-message-item"
      }, h("image", {
        class: "image",
        src: "../../../../assets/image/message.png"
      }), h("text", {
        class: "text"
      }, item.commentNum))));
    }, this))));;
  },
  classUid: "c7185"
}, {});
P.config = {
  backgroundColor: '#fff',
  navigationBarBackgroundColor: '#fff',
  navigationBarTitleText: '趣问答',
  navigationBarTextStyle: 'black'
};
Page(React.registerPage(P, "pages/platform/question/index/index"));
export default P;