App({
  globalData: {
    BaseData: [{
      "id": 786,
      "sex": 1,
      "content": "我来了",
      "zanNumber": 27
    }, {
      "id": 854,
      "sex": 1,
      "content": "我又来了",
      "zanNumber": 14
    }, {
      "id": 1022,
      "sex": 1,
      "content": "年芳27湖南人氏",
      "zanNumber": 14
    }, {
      "id": 1103,
      "sex": 1,
        "content": "人生真是讽刺，一个人竟然可以变成自己曾经最讨厌的样子",
      "zanNumber": 10
    }, {
      "id": 1005,
      "sex": 0,
        "content": "我是哑巴，你是瞎子，我们就这样保持最纯真的友谊，最遥远的爱情。",
      "zanNumber": 7
    }, {
      "id": 1214,
      "sex": 1,
        "content": "人生最重要的是时机，时机对了，凡事都有可能。",
      "zanNumber": 6
    }, {
      "id": 1207,
      "sex": 1,
        "content": "生活的洪流欲让人们窒息，我们却在缺氧的环境中肆意成长。",
      "zanNumber": 5
    }, {
      "id": 1227,
      "sex": 1,
      "content": "扣首问路，码梦为生",
      "zanNumber": 4
    }, {
      "id": 1206,
      "sex": 1,
        "content": "Dreams don't come for free. 梦想不会平白无故实现。～",
      "zanNumber": 3
    }, {
      "id": 799,
      "sex": 0,
        "content": "没有光明是不幸的么？不，需要光明才是真正的不幸。",
      "zanNumber": 10
    }, {
      "id": 859,
      "sex": 0,
        "content": "为什么你宁愿吃生活上的苦 而不愿意吃学习上的苦？！",
      "zanNumber": 7
    }, {
      "id": 825,
      "sex": 0,
        "content": "我的小伙伴们都惊呆了！。",
      "zanNumber": 6
    }, {
      "id": 861,
      "sex": 0,
        "content": "数星星的孩子，是在和夜晚的星空交谈，而不是为了得到一个数字。",
      "zanNumber": 3
    }],
    CopyRight: "一个有趣的小程序小程序.",
    IconGood: '/assets/icon-good.png',
    Avatar: '/assets/icon-avatar.png',
    AvatarBoy: '/assets/icon_avatar_boy.png',
    AvatarGirl: '/assets/icon_avatar_girl.png',
    IconBoy: '/assets/icon-boy.png',
    IconGirl: '/assets/icon-girl.png',
    Banner: '/assets/demo-banner.jpg',
  },
  onLaunch: function () {

  },
  onLaunch: function () {

  },
  onLoad: function (options) {
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

        // console.log(res.data['id'])
        console.log(JSON.stringify(res.data))
        App.globalData.content = JSON.stringify(res.data)
        // console.log( toString(res.data) );
      },

    })
  },
})
