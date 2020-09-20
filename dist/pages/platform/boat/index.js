import React from "../../../ReactWX.js";

/*eslint-disable*/
const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

function P() {
  this.state = {
    date: '',
    orginCity: '鼓浪屿',
    targerCity: '厦门',
    isStartCity: true
  };
}

P = React.toClass(P, React.Component, {
  componentWillMount: function () {
    React.getApp().globalData.dateSelect = new Date();
  },
  onShow: function () {
    let date = React.getApp().globalData.dateSelect;
    date = date.getMonth() + 1 + '月' + date.getDate() + '日 ' + WEEK[date.getDay()];
    this.setState({
      date
    });
    let app = React.getApp();

    if (app.globalData.citySelect) {
      if (this.state.isStartCity) {
        this.setState({
          orginCity: app.globalData.citySelect
        });
      } else {
        this.setState({
          targerCity: app.globalData.citySelect
        });
      }
    }
  },
  fun_tip: function () {
    React.api.showModal({
      title: '提示',
      content: '该部分仅展示，无具体功能!',
      showCancel: false
    });
  },
  toCitySelect: function (isStartCity) {
    this.setState({
      isStartCity
    });
    React.api.navigateTo({
      url: '/pages/platform/citySelect/index'
    });
  },
  toDateSelect: function () {
    React.api.navigateTo({
      url: '/pages/platform/calendar/index'
    });
  },
  exChangeCity: function () {
    let curData = this.state.orginCity;
    this.setState({
      orginCity: this.state.targerCity
    });
    this.setState({
      targerCity: curData
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "boat"
    }, h("view", {
      class: "boat-content"
    }, h("view", {
      class: "city-select-container"
    }, h("view", {
      onTap: this.toCitySelect.bind(this, true),
      class: "orgin-city-wrapper col",
      "data-tap-uid": "e66_29",
      "data-beacon-uid": "default"
    }, h("view", {
      class: "tip-wrapper row"
    }, h("view", {
      class: "dot"
    }), h("text", {
      class: "font-22"
    }, "\u51FA\u53D1")), h("view", {
      class: "orgin-ctiy"
    }, h("text", {
      class: "font-38"
    }, this.state.orginCity))), h("view", {
      onTap: this.exChangeCity.bind(this),
      class: "switch-logo",
      "data-tap-uid": "e70_29",
      "data-beacon-uid": "default"
    }, h("image", {
      class: "image",
      src: "..\\\\..\\\\..\\\\assets\\\\image\\\\switch.png"
    })), h("view", {
      onTap: this.toCitySelect.bind(this, false),
      class: "target-city-wrapper col",
      "data-tap-uid": "e73_29",
      "data-beacon-uid": "default"
    }, h("view", {
      class: "tip-wrapper row"
    }, h("view", {
      class: "dot"
    }), h("text", {
      class: "font-22"
    }, "\u5230\u8FBE")), h("view", {
      class: "target-ctiy"
    }, h("text", {
      class: "font-38"
    }, this.state.targerCity)))), h("view", {
      onTap: this.toDateSelect.bind(this),
      class: "date-select-container col",
      "data-tap-uid": "e78_25",
      "data-beacon-uid": "default"
    }, h("text", {
      class: "title"
    }, "\u51FA\u53D1\u65E5\u671F"), h("text", {
      class: "date"
    }, this.state.date)), h("text", {
      onTap: this.fun_tip.bind(this),
      class: "search-btn",
      "data-tap-uid": "e82_26",
      "data-beacon-uid": "default"
    }, "\u5F00\u59CB\u67E5\u8BE2")));;
  },
  classUid: "c3340"
}, {});
P.config = {
  backgroundColor: '#3399ff',
  navigationBarBackgroundColor: '#3399ff',
  navigationBarTitleText: '船票'
};
Page(React.registerPage(P, "pages/platform/boat/index"));
export default P;