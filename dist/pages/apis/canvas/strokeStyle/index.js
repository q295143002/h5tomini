import React from "../../../../ReactWX.js";

function Data() {
  this.state = {};
}

/* eslint-disable */
// 事件
Data = React.toClass(Data, React.Component, {
  drawCanvas1: function () {
    const ctx = React.api.createCanvasContext('myCanvas1', this);
    ctx.beginPath();
    ctx.setStrokeStyle('red');
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 170);
    ctx.stroke();
    ctx.setFontSize(15);
    ctx.setTextAlign('left');
    ctx.fillText('textAlign=left', 150, 60);
    ctx.setTextAlign('center');
    ctx.fillText('textAlign=center', 150, 80);
    ctx.setTextAlign('right');
    ctx.fillText('textAlign=right', 150, 100);
    ctx.closePath();
  },
  onShow: function () {
    this.drawCanvas1();
  },
  componentDidMount: function () {// const ctx = React.api.createCanvasContext('myCanvas', this);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("canvas", {
      class: "content",
      id: "myCanvas1"
    }));;
  },
  classUid: "c1025"
}, {});
Page(React.registerPage(Data, "pages/apis/canvas/strokeStyle/index"));
export default Data;