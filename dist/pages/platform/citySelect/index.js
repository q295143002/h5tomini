import React from "../../../ReactWX.js";

function P() {
  this.state = {
    data: [],
    isSearch: false,
    searchResult: []
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
      url: '/18752/qunar/city',
      success: function (data) {
        React.api.hideLoading();
        let curData = that.cleanData(data.data);
        that.setState({
          data: curData
        });
      }
    });
  },
  cleanData: function (data) {
    let result = [];
    let obj = {};
    data.map(item => {
      if (/[A-Z]/.test(item)) {
        if (item !== 'A') {
          result.push(obj);
        }

        obj = {};
        obj.title = item;
        obj.data = [];
      } else {
        obj.data.push(item);
      }
    });
    result.push(obj);
    return result;
  },
  itemClick: function (city) {
    React.api.showModal({
      title: '提示',
      content: '当前选择城市为：' + city,
      success: e => {
        if (e.confirm) {
          var app = React.getApp();
          app.globalData.citySelect = city;
          React.api.navigateBack();
        }
      }
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "city-select"
    }, h("view", {
      class: "search-wrapper"
    }, h("input", {
      class: "input",
      type: "text",
      placeholder: "\u641C\u7D22\u76EE\u7684\u5730"
    }), h("image", {
      class: "image",
      src: "../../../assets/image/search.png"
    })), this.state.isSearch ? h("view", {
      class: "search-container"
    }, this.state.searchResult.map(function (item, i1985) {
      return h("view", {
        class: "search-result-item"
      }, item);
    }, this)) : h("view", {
      class: "city-wrapper"
    }, this.state.data.map(function (item, i2411) {
      return h("view", {
        class: "city-item-wrapper"
      }, h("view", {
        class: "title"
      }, item.title), h("view", {
        class: "city-item"
      }, item.data.map(function (item, i2822) {
        return h("view", {
          onTap: this.itemClick.bind(this, item),
          class: "item",
          "data-tap-uid": 'e90_64_' + i2411 + '-' + i2822,
          "data-beacon-uid": "default"
        }, h("text", null, item));
      }, this)));
    }, this)));;
  },
  classUid: "c3880"
}, {});
Page(React.registerPage(P, "pages/platform/citySelect/index"));
export default P;