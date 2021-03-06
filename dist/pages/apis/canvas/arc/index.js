import React from "../../../../ReactWX.js";

function Data() {
  this.state = {};
}

/* eslint-disable */
// 事件
Data = React.toClass(Data, React.Component, {
  onShow: function () {
    this.drawCanvas2();
  },
  drawCanvas2: function () {
    const ctx = React.api.createCanvasContext('arc', this);
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.setFillStyle('#EEEEEE');
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(40, 75);
    ctx.lineTo(160, 75);
    ctx.moveTo(100, 15);
    ctx.lineTo(100, 135);
    ctx.setStrokeStyle('#AAAAAA');
    ctx.stroke();
    ctx.setFontSize(12);
    ctx.setFillStyle('black');
    ctx.fillText('0', 165, 78);
    ctx.fillText('0.5*PI', 83, 145);
    ctx.fillText('1*PI', 15, 78);
    ctx.fillText('1.5*PI', 83, 10); // Draw points

    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('lightgreen');
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 25, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('blue');
    ctx.fill();
    ctx.beginPath();
    ctx.arc(150, 75, 2, 0, 2 * Math.PI);
    ctx.setFillStyle('red');
    ctx.fill(); // Draw arc

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 1.5 * Math.PI);
    ctx.setStrokeStyle('#333333');
    ctx.stroke();
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
      id: "arc",
      style: React.toStyle({
        backgroundColor: '#ffffff'
      }, this.props, 'style2948')
    }));;
  },
  classUid: "c1601"
}, {});
Page(React.registerPage(Data, "pages/apis/canvas/arc/index"));
export default Data;