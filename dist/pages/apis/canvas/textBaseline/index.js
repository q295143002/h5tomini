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
    const ctx = React.api.createCanvasContext('myCanvas2', this.wx);
    ctx.setStrokeStyle('red');
    ctx.moveTo(5, 375);
    ctx.lineTo(295, 375);
    ctx.stroke();
    ctx.setFontSize(20);
    ctx.setTextBaseline('top');
    ctx.fillText('top', 5, 375);
    ctx.setTextBaseline('middle');
    ctx.fillText('middle', 50, 375);
    ctx.setTextBaseline('bottom');
    ctx.fillText('bottom', 120, 375);
    ctx.setTextBaseline('normal');
    ctx.fillText('normal', 200, 375);
    var that = this;
    ctx.draw(false, function () {
      React.api.canvasToTempFilePath({
        x: 100,
        y: 200,
        width: 500,
        height: 500,
        destWidth: 500,
        destHeight: 500,
        canvasId: 'myCanvas2',
        success: function (res) {
          console.log(res.tempFilePath, that.wx, React.api.canvasToTempFilePath + "");
        }
      }, that.wx);
    });
  },
  componentDidMount: function () {// const ctx = React.api.createCanvasContext('myCanvas', this);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "anu-block"
    }, h("view", null, "\u6D4B\u8BD5setTextBaseline\u4E0EcanvasToTempFilePath"), h("canvas", {
      class: "content",
      id: "myCanvas2"
    }));;
  },
  classUid: "c1480"
}, {});
Page(React.registerPage(Data, "pages/apis/canvas/textBaseline/index"));
export default Data;