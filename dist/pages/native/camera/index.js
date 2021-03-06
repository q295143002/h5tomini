import React from "../../../ReactWX.js";

function P() {
  this.state = {
    mode: 'normal',
    devicePosition: 'back',
    flash: 'auto',
    src: ''
  };
}

P = React.toClass(P, React.Component, {
  takePhoto: function () {
    const ctx = React.api.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: res => {
        this.setState({
          src: res.tempImagePath
        });
      },
      error: function (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      style: "display:flex;flex-direction:column;align-items:center;padding-top:25rpx;"
    }, h("view", null, h("camera", {
      mode: this.state.mode
    })), h("view", {
      style: "font-size: 32rpx;"
    }, h("button", {
      onTap: this.takePhoto,
      "data-tap-uid": "e38_28",
      "data-beacon-uid": "default"
    }), h("text", {
      style: "color: #999;"
    }, "\u9884\u89C8"), h("image", {
      src: this.state.src
    })));;
  },
  classUid: "c1192"
}, {});
Page(React.registerPage(P, "pages/native/camera/index"));
export default P;