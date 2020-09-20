import React from "../../../ReactWX.js";

function P() {
  this.state = {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    ANU_ENV: "wx",
    product: {
      "item_code": "00003563372839_00000010154601",
      "title": "皇袍",
      "desc": "product_description",
      "category_list": ["服装", "上衣", "短袖衬衫"],
      "image_list": ["https://res.wx.qq.com/mpres/htmledition/images/xxxx.jpeg"],
      "src_mini_program_path": "/detail?item_code=00003563372839_00000010154601",
      "sku_list": [{
        "sku_id": "SKU_ID",
        "price": 12345,
        "original_price": 67890,
        "status": 1,
        "poi_list": [{
          "longitude": 116.32676,
          "latitude": 40.003305,
          "radius": 5,
          "business_name": "XXX",
          "branch_name": "珠江新城店",
          "address": "新港中路123号"
        }, {
          "longitude": 117.32676,
          "latitude": 41.003305,
          "radius": 5,
          "business_name": "CCC",
          "branch_name": "客村店",
          "address": "新港中路123号"
        }],
        "sku_attr_list": [{
          "name": "颜色",
          "value": "白色"
        }, {
          "name": "尺码",
          "value": "XXL"
        }]
      }],
      "brand_info": {
        "name": "品牌名、小程序名",
        "logo": "http://xxxxx"
      }
    }
  };
}

/*eslint-disable*/
P = React.toClass(P, React.Component, {
  setDisabled: function () {
    console.log('disabled');
    this.setState({
      disabled: !this.state.disabled
    });
  },
  setPlain: function () {
    this.setState({
      plain: !this.state.plain
    });
  },
  setLoading: function () {
    this.setState({
      loading: !this.state.loading
    });
  },
  getUserInfo: function (e) {
    // eslint-disable-next-line
    console.log(e);
  },
  click: function (e) {
    console.log('click', e);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, this.state.ANU_ENV === 'quick' ? h("view", {
      class: "quick-container"
    }, h("text", {
      disabled: this.state.disabled,
      class: 'quick-button ' + (this.state.plain ? 'default-plain' : 'default'),
      onTap: this.click,
      "data-tap-uid": "e108_118",
      "data-beacon-uid": "default"
    }, "default"), h("text", {
      disabled: this.state.disabled,
      class: 'quick-button ' + (this.state.plain ? 'primary-plain' : 'primary'),
      onTap: this.click,
      "data-tap-uid": "e109_118",
      "data-beacon-uid": "default"
    }, "primary"), h("text", {
      disabled: this.state.disabled,
      class: 'quick-button ' + (this.state.plain ? 'warning-plain' : 'warning'),
      onTap: this.click,
      "data-tap-uid": "e110_118",
      "data-beacon-uid": "default"
    }, "warning"), h("text", {
      class: "quick-button default",
      onTap: this.setDisabled.bind(this),
      "data-tap-uid": "e113_41",
      "data-beacon-uid": "default"
    }, "\u70B9\u51FB\u8BBE\u7F6E\u4EE5\u4E0A\u6309\u94AEdisabled\u5C5E\u6027"), h("text", {
      class: "quick-button default",
      onTap: this.setPlain.bind(this),
      "data-tap-uid": "e114_41",
      "data-beacon-uid": "default"
    }, "\u70B9\u51FB\u8BBE\u7F6E\u4EE5\u4E0A\u6309\u94AEplain\u5C5E\u6027")) : h("view", null, h("view", {
      style: "margin: 4px 0px"
    }, h("button", {
      class: "anu-block",
      type: "default",
      loading: this.state.loading,
      disabled: this.state.disabled,
      plain: this.state.plain
    }, "default")), h("view", {
      style: "margin: 4px 0px"
    }, h("button", {
      class: "anu-block",
      type: "primary",
      size: "mini",
      loading: this.state.loading,
      disabled: this.state.disabled,
      plain: this.state.plain
    }, "primary")), h("view", {
      style: "margin: 4px 0px"
    }, h("button", {
      class: "anu-block",
      type: "warn",
      disabled: this.state.disabled,
      plain: this.state.plain,
      loading: this.state.loading
    }, "warn"), h("button", {
      class: "anu-block",
      type: "warn",
      disabled: this.state.disabled,
      plain: this.state.plain
    }, "warn")), h("view", {
      style: "margin: 4px 0px"
    }, h("button", {
      onTap: this.setDisabled.bind(this),
      "data-tap-uid": "e155_15",
      "data-beacon-uid": "default"
    }, "\u70B9\u51FB\u8BBE\u7F6E\u4EE5\u4E0A\u6309\u94AEdisabled\u5C5E\u6027")), h("view", {
      style: "margin: 4px 0px"
    }, h("button", {
      onTap: this.setPlain.bind(this),
      "data-tap-uid": "e158_15",
      "data-beacon-uid": "default"
    }, "\u70B9\u51FB\u8BBE\u7F6E\u4EE5\u4E0A\u6309\u94AEplain\u5C5E\u6027")), h("view", {
      style: "margin: 4px 0px"
    }, h("button", {
      onTap: this.setLoading.bind(this),
      "data-tap-uid": "e161_15",
      "data-beacon-uid": "default"
    }, "\u70B9\u51FB\u8BBE\u7F6E\u4EE5\u4E0A\u6309\u94AEloading\u5C5E\u6027")), h("button", {
      class: "bottom",
      type: "primary",
      "open-type": "getUserInfo",
      lang: "zh_CN",
      onGetUserInfo: this.getUserInfo.bind(this),
      "data-getuserinfo-uid": "e168_7",
      "data-beacon-uid": "default"
    }, "\u6388\u6743\u767B\u5F55", ' '), ' '), this.state.ANU_ENV == 'wx' && h("view", {
      style: "margin: 4px 0px"
    }, h("view", {
      product: this.state.product
    })));;
  },
  classUid: "c4356"
}, {});
Page(React.registerPage(P, "pages/native/button/index"));
export default P;