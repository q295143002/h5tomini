import React from "../../../ReactWX.js";

function randomHexColor() {
  let key = parseInt(Math.random() * 20, 10);
  return ['#FFF68F', '#FFEFD5', '#FFE4E1', '#FFDEAD', '#FFC1C1', '#FFB90F', '#FFA54F', '#FF8C00', '#FF7F50', '#FF6EB4', '#FAF0E6', '#F7F7F7', '#F0FFFF', '#F08080', '#FF6A6A', '#FFFACD', '#FFE1FF', '#FFBBFF', '#EED8AE', '#EE9A00'][key];
}

function P() {
  this.state = {
    array1: [{
      name: '动物1'
    }, {
      name: '动物2'
    }, {
      name: '动物3'
    }],
    array2: [{
      name: '猫1'
    }, {
      name: '狗2'
    }, {
      name: '兔3'
    }],
    array3: [{
      name: '小猫1'
    }, {
      name: '小狗2'
    }, {
      name: '小兔子3'
    }]
  };
}

P = React.toClass(P, React.Component, {
  changeNumbers: function () {
    this.setState({
      array: [{
        name: '狗1'
      }, {
        name: '狗3'
      }, {
        name: '狗4'
      }, {
        name: '狗5'
      }]
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      onTap: this.changeNumbers.bind(this),
      class: "anu-block",
      "data-tap-uid": "e92_17",
      "data-beacon-uid": "default"
    }, this.state.array1.map(function (el, i1900) {
      return h("view", {
        key: el.name,
        class: "anu-block"
      }, h("view", {
        class: "index-item-1",
        style: React.toStyle({
          backgroundColor: randomHexColor()
        }, this.props, 'style4209' + i1900)
      }, el.name), this.state.array2.map(function (item, i2235) {
        return h("view", {
          key: item.name,
          class: "anu-block"
        }, h("view", {
          class: "index-item-2",
          style: React.toStyle({
            backgroundColor: randomHexColor()
          }, this.props, 'style4959' + i1900 + '-' + i2235)
        }, item.name, "======="), this.state.array3.map(function (key, i2678) {
          return h("view", {
            key: key.name,
            class: "index-item-3",
            style: React.toStyle({
              backgroundColor: randomHexColor()
            }, this.props, 'style6073' + i1900 + '-' + i2235 + '-' + i2678)
          }, key.name);
        }, this));
      }, this));
    }, this));;
  },
  classUid: "c4110"
}, {});
Page(React.registerPage(P, "pages/syntax/loop3/index"));
export default P;