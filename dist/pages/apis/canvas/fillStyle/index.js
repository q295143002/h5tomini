import React from "../../../../ReactWX.js";
/* eslint-disable */
// 事件

function P() {
  this.state = {};
}

P = React.toClass(P, React.Component, {
  onShow: function () {
    this.drawCanvas2();
  },
  drawCanvas2: function () {
    const ctx = React.api.createCanvasContext('fill', this); // begin path

    ctx.rect(10, 10, 100, 30);
    ctx.setFillStyle('yellow');
    ctx.fill(); // begin another path

    ctx.beginPath();
    ctx.rect(10, 40, 100, 30); // only fill this rect, not in current path

    ctx.setFillStyle('blue');
    ctx.fillRect(10, 70, 100, 30);
    ctx.rect(10, 100, 100, 30); // it will fill current path

    ctx.setFillStyle('red');
    ctx.fill();
    ctx.draw();
  },
  componentDidMount: function () {
    console.log('fill Did Mount'); // const ctx = React.api.createCanvasContext('myCanvas', this);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("canvas", {
      class: "content",
      id: "fill",
      style: React.toStyle({
        border: '1px solid #eeeeee',
        backgroundColor: '#ffffff'
      }, this.props, 'style1963')
    }));;
  },
  classUid: "c1108"
}, {});
Page(React.registerPage(P, "pages/apis/canvas/fillStyle/index"));
export default P;