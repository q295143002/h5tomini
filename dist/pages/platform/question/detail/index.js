import React from "../../../../ReactWX.js";

function P() {
  this.state = {
    data: {},
    answer: [],
    sortkey: 'byTime'
  };
}

P = React.toClass(P, React.Component, {
  componentDidMount: function () {
    let that = this;
    React.api.showLoading({
      title: '获取资源中',
      mask: true
    });
    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/11595/qunar/question/detail',
      success: function (data) {
        React.api.hideLoading();
        that.setState({
          data: data.data
        });
        that.setState({
          answer: [...that.state.answer, ...data.data.answer]
        });
      }
    });
  },
  switchSortkey: function () {
    this.setState({
      sortkey: this.state.sortkey === 'byTime' ? 'byHot' : 'byTime'
    });
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "detail-page"
    }, h("view", {
      class: "question-detail"
    }, h("view", {
      class: "title"
    }, this.state.data.question), h("view", {
      class: "city"
    }, this.state.data.city), h("view", {
      class: "other-infortion"
    }, h("view", null, h("image", {
      class: "image",
      src: this.state.data.userImage
    }), h("text", {
      class: "userName text"
    }, this.state.data.userName), h("text", {
      class: "post-date text"
    }, this.state.data.date)), h("view", {
      class: "eye-wrapper"
    }, h("image", {
      class: "image",
      src: "../../../../assets/image/eye.png"
    }), h("text", {
      class: "eye-num text"
    }, this.state.data.eyeNum)))), h("view", {
      class: "question-prompt"
    }, h("text", {
      class: "text"
    }, '共' + this.state.data.answerNum + '个回答'), h("view", {
      onTap: this.switchSortkey.bind(this),
      class: "sort-wrapper",
      "data-tap-uid": "e56_25",
      "data-beacon-uid": "default"
    }, h("image", {
      class: "image",
      src: "../../../../assets/image/sort.png"
    }), h("text", {
      class: "text"
    }, this.state.sortkey === 'byTime' ? '按时间排序' : '按热度排序'))), this.state.answer.map(function (item, i2471) {
      return h("view", {
        class: "answer-wrapper"
      }, h("view", {
        class: "user-wrapper"
      }, h("image", {
        class: "image",
        src: item.userImage
      }), h("view", {
        class: "name-time"
      }, h("text", {
        class: "text-name"
      }, item.userName), h("text", {
        class: "text time"
      }, item.time))), h("view", {
        class: "answer-desc"
      }, item.desc), h("view", {
        class: "agree-with-wrapper"
      }, h("image", {
        class: "image",
        src: "../../../../assets/image/agree_with.png"
      }), h("text", {
        class: "text"
      }, item.agreeWithNum)));
    }, this));;
  },
  classUid: "c3611"
}, {});
P.config = {
  backgroundColor: '#fff',
  navigationBarBackgroundColor: '#fff',
  navigationBarTitleText: '问答详情',
  navigationBarTextStyle: 'black'
};
Page(React.registerPage(P, "pages/platform/question/detail/index"));
export default P;