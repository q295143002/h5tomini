import React from "../../../ReactWX.js";

function P() {
  this.state = {
    checkboxItems: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本',
      checked: 'true'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }],
    radioItems: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }],
    hidden: false
  };
}

P = React.toClass(P, React.Component, {
  checkboxChange: function (e) {
    //待调试
    var checked = e.detail.value || e.target.value;
    var state = this.state;

    for (var i = 0; i < state.checkboxItems.length; i++) {
      if (checked.indexOf(state.checkboxItems[i].name) !== -1) {
        state.checkboxItems[i].checked = true;
      } else {
        state.checkboxItems[i].checked = false;
      }
    } // eslint-disable-next-line


    this.setState(state);
  },
  radioChange: function (e) {
    var checked = e.detail.value || e.target.value;
    var state = this.state;

    for (var i = 0; i < state.radioItems.length; i++) {
      if (checked.indexOf(state.radioItems[i].name) !== -1) {
        state.radioItems[i].checked = true;
      } else {
        state.radioItems[i].checked = false;
      }
    } // eslint-disable-next-line


    this.setState(state);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "column-layout"
    }, h("view", {
      className: "section section_gap column-layout"
    }, h("view", {
      className: "section__title"
    }, "\u8868\u5355\u7EC4\u4EF6\u5728label\u5185"), h("checkbox-group", {
      className: "group column-layout",
      onChange: this.checkboxChange,
      "data-change-uid": "e62_24",
      "data-beacon-uid": "default"
    }, this.state.checkboxItems.map(function (item, index) {
      return h("view", {
        className: "label-1",
        key: index
      }, h("label", null, h("checkbox", {
        value: item.name,
        checked: item.checked,
        text: item.value,
        isRight: true
      })));
    }, this))), h("view", {
      className: "section section_gap column-layout"
    }, h("view", {
      className: "section__title"
    }, "label\u7528for\u6807\u8BC6\u8868\u5355\u7EC4\u4EF6"), h("radio-group", {
      className: "group column-layout",
      onChange: this.radioChange,
      "data-change-uid": "e86_65",
      "data-beacon-uid": "default"
    }, this.state.radioItems.map(function (item, index) {
      return h("view", {
        className: "label-2",
        key: index
      }, h("radio", {
        id: item.name,
        value: item.name,
        checked: item.checked,
        text: item.value,
        isRight: true
      }));
    }, this))));;
  },
  classUid: "c4511"
}, {});
Page(React.registerPage(P, "pages/native/label/index"));
export default P;