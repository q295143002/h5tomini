import React from "../../ReactWX.js";

function Animal(props) {
  this.state = {
    name: props.name,
    age: props.age || 1
  };
}

Animal = React.toClass(Animal, React.Component, {
  changeAge: function () {
    this.setState({
      age: ~~(Math.random() * 10)
    });
  },
  componentDidMount: function () {
    // eslint-disable-next-line
    console.log('Animal componentDidMount');
  },
  componentWillReceiveProps: function (props) {
    this.setState({
      name: props.name,
      props: props.age
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      style: React.toStyle({
        border: '1px solid #333'
      }, this.props, 'style1432')
    }, "\u540D\u5B57\uFF1A", this.state.name, "\u5E74\u9F84\uFF1A", this.state.age, "\u5C81", h("button", {
      catchTap: this.changeAge.bind(this),
      "data-tap-uid": "e37_24",
      "data-beacon-uid": "default"
    }, "\u6362\u4E00\u4E2A\u5E74\u9F84"));;
  },
  classUid: "c936"
}, {});
Animal.defaultProps = {
  age: 1,
  name: 'animal'
};
Component(React.registerComponent(Animal, "Animal"));
export default Animal;