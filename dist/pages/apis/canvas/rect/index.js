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
    const ctx = React.api.createCanvasContext('rect', this);
    ctx.setFillStyle('red');
    ctx.fillRect(0, 0, 150, 200);
    ctx.setFillStyle('blue');
    ctx.fillRect(150, 0, 150, 200);
    ctx.clearRect(10, 10, 150, 75);
    ctx.draw();
  },
  componentDidMount: function () {// const ctx = React.api.createCanvasContext('myCanvas', this);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("canvas", {
      class: "content",
      id: "rect",
      style: React.toStyle({
        border: '1px solid #eeeeee',
        backgroundColor: '#123456'
      }, this.props, 'style1367')
    }));;
  },
  classUid: "c800"
}, {});
Page(React.registerPage(Data, "pages/apis/canvas/rect/index"));
export default Data;