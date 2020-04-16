const app = getApp()
let xiaocao = "";
Page({
  data: {
    iconGood: app.globalData.IconGood,
    avatarBoy: app.globalData.AvatarBoy,
    avatarGirl: app.globalData.AvatarGirl,
    iconBoy: app.globalData.IconBoy,
    iconGirl: app.globalData.IconGirl,
    banner: app.globalData.Banner,
    baseData: app.globalData.BaseData,
    copyRight: app.globalData.CopyRight,
    dmData: [],
    symbolLeft: '{{',
    symbolRight: '}}',
  },
  // 处理弹幕位置
  setDM: function () {
    // 处理弹幕参数
    const dmArr = [];
    const _b = this.data.baseData;
    for (let i = 0; i < _b.length; i++) {
      const time = Math.floor(Math.random() * 10);
      const _time = time < 6 ? 6 + i : time + i;
      const top = Math.floor(Math.random() * 80) + 2;
      const _p = {
        id: _b[i].id,
        sex: _b[i].sex,
        content: _b[i].content,
        zanNumber: _b[i].zanNumber,
        top,
        time: _time,
      };
      dmArr.push(_p);
    }
    this.setData({
      dmData: dmArr
    });
  },

  onLoad: function () {
    this.setDM();

  },
  
  xiaocao: function (event) {
    xiaocao = event.detail.value;
    console.log(event.detail.value);
  },
  formSubmit: function () {
    wx.request({
      url: 'https://url',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        xiaocao: xiaocao
      },
      success: function (res) {
        wx.showToast({
          title: '💁发好了👌',
        })
      // console.log(res.data['id'])
      console.log( JSON.stringify(res.data))
      // console.log( toString(res.data) );
      },
      fail: function (res) {
        wx.showToast({
          title: '发送失败🥺',
          mask: true,
        })
      }
    })
  }
})