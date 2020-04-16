// pages/index/index.js

var app = getApp()
var num = 0;
Page({
  data: {
    moto: "Loading...",//参数
    refreshBg:'rgb(136, 204, 204)',

    nickName: '',
    avatarUrl: '',
    isCanDraw: false,
    refresh: '刷新',
    music: '音乐',
    timer: '',

    winHeight: "",//窗口高度
    currentTab: 0, //预设默认选中的栏目
    scrollLeft: 0, //tab滚动条距离左侧距离
    newsTab: ["健康", "情感", "育儿", "文学", "科技"],

  },
  onLoad: function () {
    this.getdata();
    this.setData({
      nickName: wx.getStorageSync('nickName') || '',
      avatarUrl: wx.getStorageSync('avatarUrl') || ''
    })

  },

  //自定义参数名字
  getdata: function () {
    var that = this;
    wx.request({
      url: 'https://url',
      method: 'GET',
      dataType: 'json',
      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          moto: JSON.stringify(res.data.biu),
        
        });
        console.log(res.data.biu)
      },
      fail: function (err) { }, //请求失败
      complete: function () { } //请求完成后执行的函数
    })
  },
  goToAbout: function () {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  refresh:function (){
    this.getdata();
  
    num++;
    var result = num / 2;
    if (num % 1 == 0) {
      this.setData({
        refreshBg: 'rgb(208, 242, 244)'
      });
      // var that = this;
      // timer: setInterval(function () {
      //   that.getdata();
      // }, 10000);
      
      console.log("1");
    } else {
      this.setData({
        refreshBg: 'rgb(136, 204, 204)'
      });
      wx.switchTab({
        url: '/pages/index/index',
      })
      
       clearInterval(this.data.timer)
      
    }
  },
  getUserInfo(e) {
    this.setData({
      nickName: e.detail.userInfo.nickName,
      avatarUrl: e.detail.userInfo.avatarUrl
    })
    wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
    wx.setStorageSync('nickName', e.detail.userInfo.nickName)
  },
  createShareImage() {
    this.setData({
      isCanDraw: !this.data.isCanDraw
    })
  },
  recover: function(){
    var that = this;
    setInterval(function () {
      that.getdata();  
    }, 5000) 
  },
  onHide: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter);
  }, 
  onUnload: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
  },
  // ugc: function() {
    
  // }
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击tab切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab向左滚动。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {
    this.getdata();
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          winHeight: calc
        });
      }
    });
  }
})

