import React from "../../../ReactWX.js";
const formItemStyle = {
  marginBottom: '10px',
  textAlign: 'center',
  padding: '10px 10px 10px 10px',
  fontWeight: 'bold'
};

function Style() {
  this.state = {
    title: '使用 React 编写小程序',
    methodColor: {
      color: 'blue',
      bac: '#fee',
      radius: '4px'
    }
  };
}

Style = React.toClass(Style, React.Component, {
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "inline-container"
    }, h("view", {
      class: "item"
    }, "1. class \u6837\u5F0F"), h("view", {
      class: "page_hd"
    }, this.state.title), h("view", {
      class: "item"
    }, "2. \u4F20\u7EDF inlineStyle \u6837\u5F0F"), h("view", {
      style: React.toStyle({
        textAlign: 'center',
        padding: '10px 10px 10px 10px',
        fontWeight: 'bold',
        fontSize: '13px'
      }, this.props, 'style2303')
    }, this.state.title), h("view", {
      class: "item"
    }, "3. props \u4E3A\u53C2\u6570 inlineStyle \u6837\u5F0F"), h("view", {
      style: React.toStyle({
        zIndex: this.props.studyTip === 0 ? 3 : 1
      }, this.props, 'style2913')
    }, this.state.title), h("view", {
      class: "item"
    }, "4. \u76F4\u63A5\u662Fobject \u4E3A\u53C2\u6570 inlineStyle \u6837\u5F0F"), h("view", {
      style: React.toStyle(formItemStyle, this.props, 'style3301')
    }, this.state.title), h("view", {
      class: "item"
    }, "5. state \u4E3A\u53C2\u6570 inlineStyle \u6837\u5F0F"), h("view", {
      style: React.toStyle({
        color: this.state.methodColor.color,
        backgroundColor: this.state.methodColor.bac
      }, this.props, 'style3752')
    }, h("text", {
      style: React.toStyle({
        color: this.state.methodColor.color,
        backgroundColor: this.state.methodColor.bac
      }, this.props, 'style4162')
    }, this.state.title)));;
  },
  classUid: "c2437"
}, {});
Style.config = {
  navigationBarTextStyle: '#fff',
  navigationBarBackgroundColor: '#0088a4',
  navigationBarTitleText: 'Demo',
  backgroundColor: '#eeeeee',
  backgroundTextStyle: 'light'
};
Style.defaultProps = {
  studyTip: 1
};
Page(React.registerPage(Style, "pages/syntax/inlineStyle/index"));
export default Style;