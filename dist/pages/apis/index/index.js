import React from "../../../ReactWX.js";

/* eslint-disable */
function alert(msg) {
  React.api.showModal({
    title: '',
    content: msg,
    showCancel: false,
    confirmText: '确定'
  });
} // 事件


function P() {
  this.state = {
    text: 'page3',
    imgs: [],
    imgs2: []
  };
}

P = React.toClass(P, React.Component, {
  componentDidMount: function () {},
  click: function () {
    console.log(111);
  },
  showModal: function () {
    React.api.showModal({
      title: '我是一个title',
      content: '内容是啥',
      cancelText: '取消',
      confirmText: '确定',
      success: function (result) {
        console.log('result', result);
      }
    });
  },
  showContextMenu: function () {
    React.api.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      itemColor: '#ff33ff',
      success: function (data) {
        alert("handling success, " + JSON.stringify(data));
      },
      cancel: function () {
        alert('handling cancel');
      },
      fail: function (data, code) {
        alert("handling fail, code = " + code);
      }
    });
  },
  vibrateLong: function () {
    console.log('vibrateLong');
    React.api.vibrateLong({
      success: () => {
        alert('震动起来了');
      }
    });
  },
  vibrateShort: function () {
    console.log('vibrateShort');
    React.api.vibrateShort({
      success: () => {
        alert('震动起来了');
      }
    });
  },
  upload: function () {
    console.log('upload');
    React.api.chooseImage({
      success: function (data) {
        console.log("handling success: ", data);
        React.api.uploadFile({
          url: 'http://yapi.demo.qunar.com/mock/291/aaaaa',
          filePath: data.tempFilePaths[0],
          name: 'file',
          fileType: 'image',
          formData: {
            user: 'test'
          },
          success: function (data) {
            console.log(data, '---');
            React.api.showModal({
              title: 'success'
            });
          },
          fail: function (data, code) {
            console.log("handling fail, code = " + code);
            React.api.showModal({
              title: 'fail',
              content: "code = " + code
            });
          },
          getRawResult: function (task) {
            task.onProgressUpdate(res => {
              console.log('上传进度', res.progress);
              console.log('已经上传的数据长度', res.totalBytesSent);
              console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
            });
          }
        });
      }
    });
  },
  request: function () {
    React.api.request({
      url: 'http://yapi.demo.qunar.com/mock/5774/unauth/account/register',
      method: 'post',
      success: function (res) {
        alert("the status code of the response: " + JSON.stringify(res.data));
      },
      fail: function (err) {
        alert("handling fail, code = " + err);
      }
    });
  },
  download: function () {
    React.api.downloadFile({
      url: 'https://yapi.ymfe.org/devops/index.html#%E7%A6%81%E6%AD%A2%E6%B3%A8%E5%86%8C',
      success: function (data) {
        alert("handling success" + data);
      },
      fail: function (data, code) {
        alert("handling fail, code = " + code);
      },
      getRawResult: function (task) {
        task.onProgressUpdate(res => {
          console.log('下载进度', res.progress);
          console.log('已经下载的数据长度', res.totalBytesWritten);
          console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
        });
      }
    });
  },
  scan: function () {
    React.api.scanCode({
      success: function (data) {
        alert("handling success: " + data.result);
      },
      fail: function (data, code) {
        alert("handling fail, code = " + code);
      }
    });
  },
  onShare: function () {
    var path = React.getCurrentPage().props.path;
    return {
      title: '妹子图片',
      path: path,
      imageUrl: "/assets/logo.jpg",
      success: res => {
        React.api.showToast({
          title: 'handling success' + res
        });
      },
      fail: res => {
        React.api.showToast({
          title: 'handling fail' + res
        });
      }
    };
  },
  getSavedFileInfo: function () {
    React.api.getSavedFileInfo({
      filePath: 'internal://Users/qitmac000476/Documents/weixin/nanachi/_site/apis/file.html',
      success: function (data) {
        alert("uri:" + data.uri + ", size: " + data.size + ", createTime: " + data.createTime);
      },
      fail: function (data, code) {
        alert("handling fail, code = " + code);
      }
    });
  },
  gotoSome: function (url) {
    console.log('url', url);

    if (url) {
      React.api.navigateTo({
        url
      });
    }
  },
  getLocation: function () {
    React.api.getLocation({
      success: function (data) {
        alert("handling success: longitude = " + data.longitude + ", latitude = " + data.latitude);
      }
    });
  },
  getNetworkType: function () {
    React.api.getNetworkType({
      success: function (data) {
        alert("handling success: " + data.networkType);
      }
    });
  },
  getSystemInfo: function () {
    React.api.getSystemInfo({
      success: function (data) {
        alert("handling success: " + JSON.stringify(data));
      }
    });
  },
  chooseImage: function () {
    React.api.chooseImage({
      count: 1,
      success: res => {
        this.setState({
          imgs: res.tempFilePaths
        });
      }
    });
  },
  chooseImage2: function () {
    React.api.chooseImage({
      count: 3,
      success: res => {
        this.setState({
          imgs2: res.tempFilePaths
        });
      }
    });
  },
  setTitleBar: function () {
    React.api.setNavigationBarTitle({
      title: 'a new title',
      success: function () {
        alert('setTitleBar success');
      }
    });
  },
  makePhoneCall: function () {
    React.api.makePhoneCall({
      phoneNumber: '10086'
    });
  },
  showToast: function () {
    React.api.showToast({
      title: 'showToast' + React.api.hideToast
    });
  },
  createShortcut: function () {
    React.api.createShortcut();
  },
  render: function () {
    var h = React.createElement;
    return h("view", {
      class: "api-page"
    }, h("view", {
      class: "anu-block"
    }, h("view", {
      onTap: this.showModal,
      class: "anu-item",
      "data-tap-uid": "e272_15",
      "data-beacon-uid": "default"
    }, h("text", null, "showModal")), h("view", {
      onTap: this.showToast,
      class: "anu-item",
      "data-tap-uid": "e275_15",
      "data-beacon-uid": "default"
    }, h("text", null, "showToast")), h("view", {
      onTap: this.showContextMenu,
      class: "anu-item",
      "data-tap-uid": "e278_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u663E\u793A\u4E0A\u4E0B\u6587\u83DC\u5355")), h("view", {
      onTap: this.vibrateShort,
      class: "anu-item",
      "data-tap-uid": "e281_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u77ED\u9707")), h("view", {
      onTap: this.vibrateLong,
      class: "anu-item",
      "data-tap-uid": "e284_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u957F\u9707")), h("view", {
      onTap: this.makePhoneCall,
      class: "anu-item",
      "data-tap-uid": "e287_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u6253\u7535\u8BDD")), h("view", {
      onTap: this.upload,
      class: "anu-item",
      "data-tap-uid": "e290_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u6587\u4EF6\u4E0A\u4F20\uFF0C\u91CC\u9762\u6709\u4E00\u4E2AgetRawResult\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7uploadTask\u5BF9\u8C61\uFF0C\u4ECE\u800C\u6DFB\u52A0\u8FDB\u5EA6\u56DE\u8C03")), h("view", {
      onTap: this.download,
      class: "anu-item",
      "data-tap-uid": "e293_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u6587\u4EF6\u4E0B\u8F7D\uFF0C\u91CC\u9762\u6709\u4E00\u4E2AgetRawResult\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7downloadTask\u5BF9\u8C61\uFF0C\u4ECE\u800C\u6DFB\u52A0\u8FDB\u5EA6\u56DE\u8C03")), h("view", {
      onTap: this.gotoSome.bind(this, '/pages/apis/request/index'),
      class: "anu-item",
      "data-tap-uid": "e297_12",
      "data-beacon-uid": "default"
    }, h("text", null, "\u6570\u636E\u8BF7\u6C42")), h("view", {
      onTap: this.scan,
      class: "anu-item",
      "data-tap-uid": "e302_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u626B\u4E00\u626B")), h("view", {
      onTap: this.gotoSome.bind(this, '/pages/apis/storage/index'),
      class: "anu-item",
      "data-tap-uid": "e306_12",
      "data-beacon-uid": "default"
    }, h("text", null, "\u5B58\u50A8")), h("view", {
      onTap: this.getSavedFileInfo,
      class: "anu-item",
      "data-tap-uid": "e312_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u83B7\u53D6\u672C\u5730\u6587\u4EF6")), h("view", {
      onTap: this.gotoSome.bind(this, '/pages/apis/clipboard/index'),
      class: "anu-item",
      "data-tap-uid": "e316_12",
      "data-beacon-uid": "default"
    }, h("text", null, "\u526A\u5207\u677F")), h("view", {
      onTap: this.gotoSome.bind(this, '/pages/apis/canvas/index'),
      class: "anu-item",
      "data-tap-uid": "e322_12",
      "data-beacon-uid": "default"
    }, h("text", null, "\u753B\u677F")), h("view", {
      onTap: this.getLocation,
      class: "anu-item",
      "data-tap-uid": "e327_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E")), h("view", {
      onTap: this.getNetworkType,
      class: "anu-item",
      "data-tap-uid": "e330_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u83B7\u53D6\u7F51\u7EDC\u7C7B\u578B")), h("view", {
      onTap: this.getSystemInfo,
      class: "anu-item",
      "data-tap-uid": "e333_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u83B7\u53D6\u7CFB\u7EDF\u4FE1\u606F(getSystemInfo)")), h("view", {
      onTap: this.chooseImage,
      class: "anu-item",
      "data-tap-uid": "e336_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u9009\u62E9\u56FE\u7247(1\u5F20)")), this.state.imgs.map(function (item, i8495) {
      return h("image", {
        src: item
      });
    }, this), h("view", {
      onTap: this.chooseImage2,
      class: "anu-item",
      "data-tap-uid": "e344_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u9009\u62E9\u56FE\u7247(\u591A\u5F20)")), this.state.imgs2.map(function (item, i8737) {
      return h("image", {
        src: item
      });
    }, this), h("view", {
      onTap: this.setTitleBar,
      class: "anu-item",
      "data-tap-uid": "e352_15",
      "data-beacon-uid": "default"
    }, h("text", null, "setTitleBar")), h("view", {
      onTap: this.createShortcut,
      class: "anu-item",
      "data-tap-uid": "e355_15",
      "data-beacon-uid": "default"
    }, h("text", null, "\u4FDD\u5B58\u56FE\u6807\u5230\u684C\u9762")), h("view", {
      onTap: this.gotoSome.bind(this, '/pages/apis/route/index'),
      class: "anu-item",
      "data-tap-uid": "e359_12",
      "data-beacon-uid": "default"
    }, h("text", null, "\u8DEF\u7531"))));;
  },
  classUid: "c9507"
}, {});
P.config = {
  navigationBarTextStyle: 'white',
  navigationBarBackgroundColor: '#0088a4',
  navigationBarTitleText: 'API',
  backgroundColor: '#eeeeee',
  backgroundTextStyle: 'light'
};
Page(React.registerPage(P, "pages/apis/index/index"));
export default P;