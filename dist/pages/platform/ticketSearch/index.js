import React from "../../../ReactWX.js";

function P() {
  this.state = {
    depCity: '北京',
    arrCity: '上海',
    exchangeStatus: false,
    displayDate: '8月28日',
    dateWeek: '周二',
    isOnlyGaotie: false,
    isStartCity: true
  };
}

P = React.toClass(P, React.Component, {
  componentWillMount: function () {
    React.getApp().globalData.dateSelect = new Date();
  },
  onShow: function () {
    let date = React.getApp().globalData.dateSelect;
    this.setState({
      displayDate: date.getMonth() + 1 + '月' + date.getDate() + '日'
    });
    this.setState({
      dateWeek: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()]
    });
    let app = React.getApp();

    if (app.globalData.citySelect) {
      if (!this.state.isStartCity) {
        this.setState({
          arrCity: app.globalData.citySelect
        });
      } else {
        this.setState({
          depCity: app.globalData.citySelect
        });
      }
    }
  },
  toDateSelect: function () {
    React.api.navigateTo({
      url: '/pages/platform/calendar/index'
    });
  },
  toCitySelect: function (isStartCity) {
    this.setState({
      isStartCity
    });
    let app = React.getApp();

    if (!isStartCity) {
      app.globalData.citySelect = '上海';
    } else {
      app.globalData.citySelect = '北京';
    }

    React.api.navigateTo({
      url: '/pages/platform/citySelect/index'
    });
  },
  exChangeCity: function () {
    this.setState({
      exchangeStatus: !this.state.exchangeStatus
    });
  },
  showTip: function () {
    React.api.showModal({
      title: '提示',
      content: '该部分仅展示，无具体功能!',
      showCancel: false
    });
  },
  handleChangeSwitch: function () {
    this.setState({
      isOnlyGaotie: !this.state.isOnlyGaotie
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      className: "ticket-page",
      style: "background-color: #feb64e"
    }, h("image", {
      className: "sreach_bg",
      mode: "scaleToFill",
      src: "http://picbed.qunarzz.com/image/b96f82f01ef5850d50e93ea511f618fa.png"
    }), h("view", {
      style: "top: -15px",
      className: "search-container anu-block"
    }, h("view", {
      className: "citySelector"
    }, h("view", {
      onTap: this.toCitySelect.bind(this, true),
      className: "cityTap",
      "data-tap-uid": "e84_27",
      "data-beacon-uid": "default"
    }, h("text", {
      className: "depCityContent"
    }, this.state.depCity)), h("view", {
      className: "city_change"
    }, h("image", {
      className: "exchange-logo",
      src: "../../../assets/image/train_icon.png"
    }), h("image", {
      className: "exchange-btn",
      src: "../../../assets/image/search_btn.png"
    })), h("view", {
      onTap: this.toCitySelect.bind(this, false),
      className: "cityTap flex-right",
      "data-tap-uid": "e98_27",
      "data-beacon-uid": "default"
    }, h("text", {
      className: "arrCityContent"
    }, this.state.arrCity))), h("view", {
      onTap: this.toDateSelect,
      className: "dateSelector",
      "data-tap-uid": "e103_23",
      "data-beacon-uid": "default"
    }, h("text", null, this.state.displayDate), h("text", {
      class: "date-week-text"
    }, this.state.dateWeek)), h("view", {
      className: "switch-content"
    }, h("view", {
      className: "switch-label"
    }, h("image", {
      className: "hight-speed",
      mode: "scaleToFill",
      src: "../../../assets/image/train_highSpeed.png"
    }), h("text", {
      className: 'switch-context ' + (this.state.isOnlyGaotie ? 'switch-label-check' : 'switch-label-uncheck')
    }, "\u53EA\u67E5\u770B\u9AD8\u94C1/\u52A8\u8F66")), h("switch", {
      class: "switch",
      checked: this.state.isOnlyGaotie,
      onChange: this.handleChangeSwitch.bind(this),
      color: "#00bcd4",
      "data-change-uid": "e124_26",
      "data-beacon-uid": "default"
    })), h("text", {
      onTap: this.showTip,
      className: "search-button",
      "data-tap-uid": "e129_24",
      "data-beacon-uid": "default"
    }, "\u641C \u7D22"), h("view", {
      className: "actions-container"
    }, h("view", {
      onTap: this.showTip,
      className: "order-action",
      "data-tap-uid": "e134_27",
      "data-beacon-uid": "default"
    }, h("text", {
      className: "action-text"
    }, "\u6211\u7684\u8BA2\u5355")), h("view", {
      className: "seprator"
    }), h("view", {
      onTap: this.showTip,
      className: "feedback-action",
      "data-tap-uid": "e138_27",
      "data-beacon-uid": "default"
    }, h("text", {
      className: "action-text"
    }, "\u54A8\u8BE2\u53CD\u9988")))), h("view", {
      className: "welfare-entrance"
    }, h("view", {
      className: "welfare-content"
    }, h("view", {
      onTap: this.showTip,
      className: "welfare-action",
      "data-tap-uid": "e146_27",
      "data-beacon-uid": "default"
    }, h("image", {
      className: "welfare-icon",
      src: "http://s.qunarzz.com/open_m_train/miniprogram/home_redpack.png"
    }), h("text", {
      className: "action-text"
    }, "\u4F18\u60E0\u62FC\u56E2")), h("view", {
      className: "seprator"
    }), h("view", {
      onTap: this.showTip,
      className: "welfare-action",
      "data-tap-uid": "e154_27",
      "data-beacon-uid": "default"
    }, h("image", {
      className: "welfare-icon",
      src: "http://s.qunarzz.com/open_m_train/miniprogram/home_welfare.png"
    }), h("text", {
      className: "action-text"
    }, "\u6211\u7684\u798F\u5229")))));;
  },
  classUid: "c6298"
}, {});
P.config = {
  backgroundColor: '#feb64e',
  navigationBarBackgroundColor: '#feb64e',
  navigationBarTitleText: '车牌搜索'
};
Page(React.registerPage(P, "pages/platform/ticketSearch/index"));
export default P;