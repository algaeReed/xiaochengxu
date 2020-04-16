Page({
  data:{
    title:"",
    content:""
  },
  // 监听输入的值
  input_Event:function(event){
    // console.log(event)
    if (event.target.dataset.title === "0"){ //标题
      var v1 = event.detail.value;
        this.setData({
          title:v1
        })
    }

    if (event.target.dataset.content === "1") {//内容
        var v2 = event.detail.value;
        this.setData({
          content:v2
        })
    }
  },
  // 点击上传图片逻辑
  click_Event:function(){
      // 记录当前函数作用域的this对象
      var _this = this; 
      // console.log(this.data.title,this.data.content);
      // 定义变量接收标题和内容
      var tit = this.data.title;
      var con = this.data.content;
      // 选择图片
      wx.chooseImage({
          count:1,
          sizeType:['compressed'],
          sourceType:['album'],
          success: function(res) {
          // 图片的数据
          var image_file = res.tempFiles[0];
          // 提示 正在上传图片
          wx.showLoading({
            title: '数据正在上传....',
            icon:'none'
          })
          // 调用上传文件的函数
          wx.uploadFile({
            url: 'http://127.0.0.1:8080/file',
            filePath: image_file.path,
            name: 'demo',
            formData:{
              title:tit,
              content:con
            },
            success:function(result){
              console.log(result)
              var data = JSON.parse(result.data);
              // 隐藏加载提示
              wx.hideLoading();
              // 弹窗
              wx.showToast({
                title: data.message
              })
            }
          })

        },
        fail:function(err){
          console.log(err)
        }
      })

  },


  onLoad:function(){
      
  }

})