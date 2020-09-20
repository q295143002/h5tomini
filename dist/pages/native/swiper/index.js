import React from "../../../ReactWX.js";

function P() {
  this.state = {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  };
}

P = React.toClass(P, React.Component, {
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName;
    var newData = {};
    newData[propertyName] = e.value;
    this.setState(newData);
  },
  changeIndicatorDots: function () {
    this.setState({
      indicatorDots: !this.state.indicatorDots
    });
  },
  changeAutoplay: function () {
    this.setState({
      autoplay: !this.state.autoplay
    });
  },
  intervalChange: function (e) {
    this.setState({
      interval: e.value
    });
  },
  durationChange: function (e) {
    this.setState({
      duration: e.value
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", null, h("view", {
      class: "page-body"
    }, h("view", {
      class: "page-section page-section-spacing swiper"
    }, h("swiper", {
      "indicator-dots": this.state.indicatorDots,
      autoplay: this.state.autoplay,
      circular: this.state.circular,
      vertical: this.state.vertical,
      interval: this.state.interval,
      duration: this.state.duration,
      "previous-margin": this.state.previousMargin + 'px',
      "next-margin": this.state.nextMargin + 'px'
    }, this.state.background.map(function (item, i1860) {
      return h("swiper-item", null, h("view", {
        class: 'swiper-item ' + item
      }));
    }, this))), h("view", {
      class: "page-section"
    }, h("view", {
      class: "weui-cells weui-cells_after-title"
    }, h("view", {
      class: "weui-cell weui-cell_switch"
    }, h("view", {
      class: "weui-cell__bd"
    }, "\u6307\u793A\u70B9"), h("view", {
      class: "weui-cell__ft"
    }, h("switch", {
      checked: this.state.indicatorDots,
      onChange: this.changeProperty,
      "data-property-name": "indicatorDots",
      "data-change-uid": "e83_40",
      "data-beacon-uid": "default"
    }))), h("view", {
      class: "weui-cell weui-cell_switch"
    }, h("view", {
      class: "weui-cell__bd"
    }, "\u81EA\u52A8\u64AD\u653E"), h("view", {
      class: "weui-cell__ft"
    }, h("switch", {
      checked: this.state.autoplay,
      onChange: this.changeProperty,
      "data-property-name": "autoplay",
      "data-change-uid": "e93_40",
      "data-beacon-uid": "default"
    }))), h("view", {
      class: "weui-cell weui-cell_switch"
    }, h("view", {
      class: "weui-cell__bd"
    }, "\u8854\u63A5\u6ED1\u52A8"), h("view", {
      class: "weui-cell__ft"
    }, h("switch", {
      checked: this.state.circular,
      onChange: this.changeProperty,
      "data-property-name": "circular",
      "data-change-uid": "e103_40",
      "data-beacon-uid": "default"
    }))), h("view", {
      class: "weui-cell weui-cell_switch"
    }, h("view", {
      class: "weui-cell__bd"
    }, "\u7AD6\u5411"), h("view", {
      class: "weui-cell__ft"
    }, h("switch", {
      checked: this.state.vertical,
      onChange: this.changeProperty,
      "data-property-name": "vertical",
      "data-change-uid": "e113_40",
      "data-beacon-uid": "default"
    }))))), h("view", {
      class: "page-section page-section-spacing"
    }, h("view", {
      class: "page-section-title"
    }, h("text", null, "\u5E7B\u706F\u7247\u5207\u6362\u65F6\u957F(ms)"), h("text", {
      class: "info"
    }, this.state.duration)), h(React.useComponent, {
      value: this.state.duration,
      min: "500",
      max: "2000",
      onChange: this.changeProperty,
      "data-property-name": "duration",
      is: "XSlider",
      "data-instance-uid": 'i126_24_' + 0
    }), h("view", {
      class: "page-section-title"
    }, h("text", null, "\u81EA\u52A8\u64AD\u653E\u95F4\u9694\u65F6\u957F(ms)"), h("text", {
      class: "info"
    }, this.state.interval)), h(React.useComponent, {
      value: this.state.interval,
      min: "2000",
      max: "10000",
      onChange: this.changeProperty,
      "data-property-name": "interval",
      is: "XSlider",
      "data-instance-uid": 'i137_24_' + 0
    }), h("view", {
      class: "page-section-title"
    }, h("text", null, "\u524D\u8FB9\u8DDD(px)"), h("text", {
      class: "info"
    }, this.state.changeProperty)), h(React.useComponent, {
      value: this.state.previousMargin,
      min: "0",
      max: "50",
      onChange: this.changeProperty,
      "data-property-name": "previousMargin",
      is: "XSlider",
      "data-instance-uid": 'i150_24_' + 0
    }), h("view", {
      class: "page-section-title"
    }, h("text", null, "\u540E\u8FB9\u8DDD(px)"), h("text", {
      class: "info"
    }, this.state.nextMargin)), h(React.useComponent, {
      value: this.state.nextMargin,
      min: "0",
      max: "50",
      onChange: this.changeProperty,
      "data-property-name": "nextMargin",
      is: "XSlider",
      "data-instance-uid": 'i161_24_' + 0
    }))));;
  },
  classUid: "c7130"
}, {});
Page(React.registerPage(P, "pages/native/swiper/index"));
export default P;