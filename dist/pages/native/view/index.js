import React from "../../../ReactWX.js";

function P(...args) {}

P = React.toClass(P, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "col"
    }, h("view", {
      class: "section"
    }, h("view", {
      class: "section__title"
    }, "flex-direction: row"), h("view", {
      class: "flex-wrp",
      style: "flex-direction:row;"
    }, h("view", {
      class: "flex-item bc_green"
    }, "1"), h("view", {
      class: "flex-item bc_red"
    }, "2"), h("view", {
      class: "flex-item bc_blue"
    }, "3"))), h("view", {
      class: "section"
    }, h("view", {
      class: "section__title"
    }, "flex-direction: column"), h("view", {
      class: "flex-wrp",
      style: "height: 300px;flex-direction:column;"
    }, h("view", {
      class: "flex-item bc_green"
    }, "1"), h("view", {
      class: "flex-item bc_red"
    }, "2"), h("view", {
      class: "flex-item bc_blue"
    }, "3"))));;
  },
  classUid: "c1434"
}, {});
P.config = {
  'navigationBarTextStyle': '#fff',
  'navigationBarBackgroundColor': '#0088a4',
  'navigationBarTitleText': 'view demo',
  'backgroundColor': '#eeeeee',
  'backgroundTextStyle': 'light'
};
Page(React.registerPage(P, "pages/native/view/index"));
export default P;