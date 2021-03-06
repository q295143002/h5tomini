import regeneratorRuntime from "../../../npm/regenerator-runtime/runtime.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from "../../../ReactWX.js";
const style = {
  'textAlign': 'center'
};

function P() {
  this.state = {
    status: ''
  };
  this.bindFns();
}

P = React.toClass(P, React.Component, {
  bindFns: function () {
    this.tapHander = this.tapHander.bind(this);
    this.say = this.say.bind(this);
  },
  say: function () {
    return new Promise(rel => {
      setTimeout(() => {
        rel('hello nanachi');
      }, 2000);
    });
  },
  tapHander: function () {
    var _ref = _asyncToGenerator(function* () {
      this.setState({
        status: 'waiting...'
      });
      let result = yield this.say();
      this.setState({
        status: result
      });
    });

    return function tapHander() {
      return _ref.apply(this, arguments);
    };
  }(),
  render: function () {
    var h = React.createElement;
    return h("view", null, h("view", {
      style: React.toStyle(style, this.props, 'style1507')
    }, "async/await"), h("view", null, "status:", this.state.status), h("button", {
      onTap: this.tapHander,
      "data-tap-uid": "e36_24",
      "data-beacon-uid": "default"
    }, "\u8BD5\u4E00\u8BD5"));;
  },
  classUid: "c1004"
}, {});
Page(React.registerPage(P, "pages/syntax/await/index"));
export default P;