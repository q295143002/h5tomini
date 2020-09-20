import regeneratorRuntime from "../../../npm/regenerator-runtime/runtime.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from "../../../ReactWX.js";

function P() {
  this.state = {
    data: []
  };
}

P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    var _ref = _asyncToGenerator(function* () {
      let that = this;
      console.log(React.api.request + '');
      let data = yield React.api.request({
        url: 'http://yapi.demo.qunar.com/mock/11595/qunar/city'
      });
      let curData = that.cleanData(data.data);
      that.setState({
        data: curData
      });
    });

    return function componentDidMount() {
      return _ref.apply(this, arguments);
    };
  }(),
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
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u5C31\u662F\u4F7F\u7528React.api.request,\u5BF9wx .request\u505A\u4E86\u5E76\u53D1\u5904\u7406"), h("view", null, "https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html"), this.state.data.map(function (el, i1219) {
      return h("view", null, el.title, "-------", h("view", {
        class: "anu-block"
      }, el.data.map(function (elem, i1378) {
        return h("view", null, elem);
      }, this)));
    }, this));;
  },
  classUid: "c1661"
}, {});
Page(React.registerPage(P, "pages/apis/request/index"));
export default P;