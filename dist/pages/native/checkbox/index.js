import React from "../../../ReactWX.js";

function P() {
  this.state = {
    items: [{
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
    }]
  };
}

P = React.toClass(P, React.Component, {
  checkboxChange: function (e) {
    const value = e.detail.value || e.target.value; // eslint-disable-next-line

    console.log('checkbox发生change事件，携带value值为：', value);
    React.api.showModal({
      title: '提示',
      content: JSON.stringify(value)
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", null, h("checkbox-group", {
      onChange: this.checkboxChange,
      "data-change-uid": "e38_32",
      "data-beacon-uid": "default"
    }, this.state.items.map(function (item, i1130) {
      return h("label", null, h("checkbox", {
        value: item.name,
        checked: item.checked,
        text: item.value,
        isRight: true
      }));
    }, this)));;
  },
  classUid: "c1785"
}, {});
P.config = {
  navigationBarTextStyle: '#fff',
  navigationBarBackgroundColor: '#0088a4',
  navigationBarTitleText: 'checkbox demo',
  backgroundColor: '#eeeeee',
  backgroundTextStyle: 'light'
};
Page(React.registerPage(P, "pages/native/checkbox/index"));
export default P;