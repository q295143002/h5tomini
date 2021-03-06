import React from "../../../ReactWX.js";

function P() {
  this.state = {
    state: '未开始',
    title: 'audio',
    color: '#9E9E9E;',
    audio: {
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      loop: false,
      controls: true
    }
  };
}

P = React.toClass(P, React.Component, {
  onPlay: function () {
    this.setState({
      state: '正在播放',
      color: '#4CAF50;'
    });
  },
  onPause: function () {
    this.setState({
      state: '暂停',
      color: '#FFEB3B;'
    });
  },
  onError: function () {
    this.setState({
      state: '出错了',
      color: '#F44336;'
    });
  },
  onEnded: function () {
    this.setState({
      state: '停止',
      color: '#607D8B;'
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      style: "display:flex;flex-direction:column;align-items:center;padding-top:25rpx;"
    }, h("view", null, h("audio", {
      src: this.state.audio.src,
      loop: this.state.audio.loop,
      controls: this.state.audio.controls,
      poster: this.state.audio.poster,
      name: this.state.audio.name,
      author: this.state.audio.author,
      onPlay: this.onPlay.bind(this),
      onEnd: this.onEnded.bind(this),
      onPause: this.onPause.bind(this),
      onError: this.onError.bind(this),
      "data-play-uid": "e62_24",
      "data-beacon-uid": "default",
      "data-end-uid": "e63_24",
      "data-pause-uid": "e64_24",
      "data-error-uid": "e65_24"
    })), h("view", {
      style: "font-size: 32rpx;"
    }, h("text", {
      style: "color: #999;"
    }, "\u5F53\u524D\u72B6\u6001\uFF1A"), h("text", {
      style: React.toStyle({
        color: this.state.color
      }, this.props, 'style4375')
    }, this.state.state)));;
  },
  classUid: "c2320"
}, {});
Page(React.registerPage(P, "pages/native/audio/index"));
export default P;