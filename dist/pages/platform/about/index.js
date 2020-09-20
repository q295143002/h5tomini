import React from "../../../ReactWX.js";

function About() {
  this.state = {
    name: 'qunar快应用',
    desc: '即点即用，让你省去下载安装的步骤，立即使用各类服务',
    serviceType: '工具类',
    subjectInfo: '北京趣拿软件科技有限公司',
    copyright: ''
  };
}

About = React.toClass(About, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", {
      className: "demo-page"
    }, h("image", {
      className: "icon",
      src: "..\\\\..\\\\..\\\\assets\\\\logo.png"
    }), h("view", {
      className: "name"
    }, this.state.name), h("view", {
      className: "name"
    }, "\u624B\u673A\u54C1\u724C\uFF1A", this.props.query.brand), h("view", {
      className: "name"
    }, "\u5FEB\u5E94\u7528\u7248\u672C\u53F7\uFF1A", this.props.query.version), h("view", {
      className: "tags"
    }, h("view", {
      className: "tag"
    }, "\u65E0\u5B89\u88C5"), h("view", {
      className: "gap"
    }, "|"), h("view", {
      className: "tag"
    }, "\u4F53\u79EF\u5C0F"), h("view", {
      className: "gap"
    }, "|"), h("view", {
      className: "tag"
    }, "\u4E00\u6B65\u76F4\u8FBE")), h("view", {
      className: "desc"
    }, this.state.desc), h("view", {
      className: "detail detail-first"
    }, h("view", {
      className: "detail-title"
    }, "\u670D\u52A1\u7C7B\u578B"), h("view", {
      className: "detail-content"
    }, this.state.serviceType)), h("view", {
      className: "detail"
    }, h("view", {
      className: "detail-title"
    }, "\u4E3B\u4F53\u4FE1\u606F"), h("view", {
      className: "detail-content"
    }, this.state.subjectInfo)), h("view", {
      className: "detail"
    }, h("view", {
      className: "detail-title"
    }, "\u9875\u9762\u53C2\u6570"), h("view", {
      className: "detail-content"
    }, "param1:", this.props.query.param1, "param2:", this.props.query.param1)), h("view", {
      className: "btn"
    }, h("button", {
      type: "primary",
      size: "default",
      onTap: React.api.createShortcut,
      "data-tap-uid": "e50_58",
      "data-beacon-uid": "default"
    }, "\u521B\u5EFA\u5FEB\u6377\u65B9\u5F0F")), h("view", {
      className: "footer"
    }, this.state.copyright));;
  },
  classUid: "c2104"
}, {});
Page(React.registerPage(About, "pages/platform/about/index"));
export default About;