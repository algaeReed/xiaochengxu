Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
            src: res.tempImagePath
          }),

          wx.uploadFile({
            url: 'http://url/upload.php',
            filePath: res.tempImagePath,
            header: {
              'content-type': 'multipart/form-data'
            },
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: () => {
              var that = this;
              wx.request({
                url: 'http://url/hand.php',
                method: 'GET',
                dataType: 'json',

                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  // var resu = JSON.parse(res.data)
                  var resu = JSON.parse(res.data)
                  console.log(resu.result[0].classname)
                  that.setData({
                    moto: resu.result[0].classname

                  });
                  
                },
                fail: function (err) { }, 
                complete: function () { } 
              })
            }
          })
          
          
      },
      fail: (res)=>{
        console.log(res);
      }
      
    })
  },

})