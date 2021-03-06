import React from "../../../../ReactWX.js";
/* eslint-disable */
// 事件

function Data() {
  this.state = {};
}

Data = React.toClass(Data, React.Component, {
  onShow: function () {
    this.drawCanvas2();
  },
  drawCanvas2: function () {
    const ctx = React.api.createCanvasContext('globalAlpha', this);
    ctx.setFillStyle('red');
    ctx.fillRect(10, 10, 150, 100);
    ctx.setGlobalAlpha(0.2);
    ctx.setFillStyle('blue');
    ctx.fillRect(50, 50, 150, 100);
    ctx.setFillStyle('yellow');
    ctx.fillRect(100, 100, 150, 100);
    ctx.draw();
  },
  componentDidMount: function () {// const ctx = React.api.createCanvasContext('myCanvas', this);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("canvas", {
      class: "globalAlpha",
      id: "globalAlpha",
      style: React.toStyle({
        backgroundColor: '#ffffff'
      }, this.props, 'style1508')
    }));;
  },
  classUid: "c859"
}, {});
Page(React.registerPage(Data, "pages/apis/canvas/globalAlpha/index"));
export default Data;