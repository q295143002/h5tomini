import React from "../../../../ReactWX.js";

function YButton(props) {
  this.state = this.computeState(props, false);
  this.handleClick = this.handleClick.bind(this);
  this.onClick = this.onClick.bind(this);
}

YButton = React.toClass(YButton, React.Component, {
  computeState: function (props, active) {
    const buttonClasses = ['anu-button'];
    const labelClasses = ['anu-button__label'];
    const loadingClasses = ['anu-button__loading'];

    if (props.size === 'mini') {
      buttonClasses.push('anu-button--mini');
      labelClasses.push('anu-button__label--mini');
      loadingClasses.push('anu-button__loading--mini');
    }

    buttonClasses.push("anu-button--" + props.type);
    labelClasses.push("anu-button__label--" + props.type);

    if (props.plain) {
      buttonClasses.push("anu-button--" + props.type + "-plain");
      labelClasses.push("anu-button__label--" + props.type + "-plain");
    }

    if (props.disabled) {
      buttonClasses.push('anu-button--disabled');
      labelClasses.push('anu-button__label--disabled');
    } else if (active) {
      buttonClasses.push('anu-button--active');
      labelClasses.push('anu-button__label--active');
    }

    if (!props.loading) {
      loadingClasses.push('anu-button__loading--hidden');
    }

    return {
      loadingClasses: loadingClasses.join(' '),
      buttonClasses: buttonClasses.join(' '),
      labelClasses: labelClasses.join(' '),
      children: this.props.children,
      env: "wx"
    };
  },
  updateState: function (nextProps, active) {
    let newState = this.computeState(nextProps, active);
    let oldState = this.state;
    let lastState = {};
    let diff = false;

    for (var i in oldState) {
      if (oldState[i] !== newState[i]) {
        diff = true;
        lastState[i] = newState[i];
      }
    }

    if (diff) {
      this.setState(lastState);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.updateState(nextProps, false);
  },
  onClick: function (e) {
    // 不在 XLabel 内部的时候，执行本身逻辑
    // 在快应用下不支持事件冒泡，直接执行本身逻辑
    if ("wx" === 'quick' || !this.props.__InLabel) {
      this.handleClick(e);
    }
  },
  handleClick: function (e) {
    var props = this.props;
    Array('onTap', 'catchTap', 'onClick', 'catchClick').forEach(function (name) {
      var fn = props[name];

      if (fn) {
        fn(e);

        if (name == 'catchTap' || name == 'catchClick') {
          e.stopPropagation();
        }
      }
    });

    if (props.disabled) {
      return;
    }

    this.updateState(this.props, true);
    setTimeout(() => {
      this.updateState(this.props, false);
    }, 150);
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      className: 'anu-col anu-center anu-middle ' + this.state.buttonClasses,
      style: React.toStyle(this.props.style, this.props, 'style6366')
    }, h("view", {
      className: "anu-button__main anu-row anu-middle"
    }, h("image", {
      className: this.state.loadingClasses,
      src: "https://s.qunarzz.com/flight_qzz/loading.gif"
    }), h("text", {
      className: this.state.labelClasses
    }, this.state.children)), this.state.env === 'ali' || this.state.env === 'bu' ? h("view", {
      className: "anu-button__mask",
      onTap: this.onClick,
      "data-tap-uid": "e110_54",
      "data-beacon-uid": "default"
    }) : h("input", {
      className: "anu-button__mask",
      type: "button",
      onTap: this.onClick,
      "data-tap-uid": "e111_70",
      "data-beacon-uid": "default"
    }));;
  },
  classUid: "c3974"
}, {});
YButton.defaultProps = {
  type: 'default',
  disabled: false,
  plain: false,
  size: 'default',
  style: {},
  loading: false,
  __InLabel: false
};
Component(React.registerComponent(YButton, "YButton"));
export default YButton;