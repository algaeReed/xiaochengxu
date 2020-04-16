// pages/about/about.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ msg: "俏少年" })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  goToAbout: function () {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  goToBegin: function () {
    wx.switchTab({
      url: '/pages/person/person'
    })
  },
  gotoBiubiu: function () {
    wx.navigateTo({
      url: '/pages/biu/biu',
    })
  },
  msg: function () {
    wx.requestSubscribeMessage({
      tmplIds: ["I46HxQ32e3qqyrT6mJ2bFXerlpPv76sgjsvWTXgzzSQ"],
      success: function (res) {
        if (res.I46HxQ32e3qqyrT6mJ2bFXerlpPv76sgjsvWTXgzzSQ === 'accept') {
          wx.showToast({
            title: '订阅OK！',
          })
        }
        console.log(res)
        //成功
      },
      fail(err) {
        //失败
        console.error(err);
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})