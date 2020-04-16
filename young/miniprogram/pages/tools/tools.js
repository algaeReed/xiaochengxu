var  app  =  getApp()
Page({
  data:  {
    moto: [],//参数
  },
  onLoad:  function  ()  {
    this.getdata();
  
  },

  //自定义参数名字
  getdata:  function ()  {
    var  that  =  this;
    wx.request({
      url:  'https://url/',
      method:  'GET',
      dataType:  'json',
      success:  function (res)  {
        that.setData({
          moto:  res.data
        })
      },
      fail:  function (err)  { }, //请求失败
      complete:  function ()  { } //请求完成后执行的函数
    })
  },
})