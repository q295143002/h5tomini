import React from "../../../ReactWX.js";

/* eslint-disable */
function alert(msg) {
  React.api.showModal({
    title: '',
    content: msg,
    showCancel: false,
    confirmText: '确定'
  });
} // 事件


function P() {
  this.state = {
    value: ''
  };
}

P = React.toClass(P, React.Component, {
  setValue: function (e) {
    this.setState({
      value: e.target.value
    });
  },
  setStorage: function () {
    React.api.setStorage({
      key: 'value',
      data: this.state.value,
      success: function (data) {
        alert('handling success');
      },
      fail: function (data, code) {
        alert("handling fail, code = " + code);
      }
    });
  },
  getStorage: function () {
    React.api.getStorage({
      key: 'value',
      success: function (res) {
        alert("handling success, " + res.data);
      },
      fail: function (data, code) {
        //不存在永远不会进入fail，只有没有权限才出错
        alert("handling fail, code = " + code);
      }
    });
  },
  getStorageFail: function () {
    React.api.getStorage({
      key: 'aaa',
      success: function (res) {
        alert("handling success, " + res.data);
      },
      fail: function (data, code) {
        //不存在永远不会进入fail, 只有没有权限才出错
        alert("handling fail, code = " + code);
      }
    });
  },
  removeStorage: function () {
    React.api.removeStorage({
      key: 'value',
      success: function (data) {
        alert('handling success');
      },
      fail: function (data, code) {
        alert("handling fail, code = " + code);
      }
    });
  },
  setStorageSync: function () {
    let data = React.api.setStorageSync('value', this.state.value);
    console.log('data', data);
  },
  getStorageSync: function () {
    let data = React.api.getStorageSync('value');
    alert("handling success, " + data);
  },
  removeStorageSync: function () {
    React.api.removeStorageSync('value');
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "col"
    }, h("view", null, h("text", null, "\u8F93\u5165\u8981\u50A8\u5B58\u7684\u5185\u5BB9, \u653Evalue\u4E2D"), h("input", {
      value: this.state.value,
      onInput: this.setValue.bind(this),
      "data-input-uid": "e90_75",
      "data-beacon-uid": "default"
    })), h("view", {
      onTap: this.setStorage,
      class: "item",
      "data-tap-uid": "e91_13",
      "data-beacon-uid": "default"
    }, h("text", null, "setStorage")), h("view", {
      onTap: this.getStorage,
      class: "item",
      "data-tap-uid": "e94_13",
      "data-beacon-uid": "default"
    }, h("text", null, "getStorage('value')")), h("view", {
      onTap: this.getStorageFail,
      class: "item",
      "data-tap-uid": "e97_13",
      "data-beacon-uid": "default"
    }, h("text", null, "getStorage( 'aaa' )")), h("view", {
      onTap: this.removeStorage,
      class: "item",
      "data-tap-uid": "e100_13",
      "data-beacon-uid": "default"
    }, h("text", null, "removeStorage")), h("view", {
      onTap: this.setStorageSync,
      class: "item",
      "data-tap-uid": "e103_13",
      "data-beacon-uid": "default"
    }, h("text", null, "setStorageSync")), h("view", {
      onTap: this.getStorageSync,
      class: "item",
      "data-tap-uid": "e106_13",
      "data-beacon-uid": "default"
    }, h("text", null, "getStorageSync")), h("view", {
      onTap: this.removeStorageSync,
      class: "item",
      "data-tap-uid": "e109_13",
      "data-beacon-uid": "default"
    }, h("text", null, "removeStorageSync")));;
  },
  classUid: "c2964"
}, {});
Page(React.registerPage(P, "pages/apis/storage/index"));
export default P;