//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scrollTop: 100,
    goods: [{
      img: 't4',
      title: '阿迪达斯男鞋2017春新款运动鞋Ultra boost 3.0缓震跑步鞋S80637 DF S80637/17春新款 41/255'
    },{
      img: 't3',
      title: '阿迪达斯男鞋2017春新款运动鞋Ultra boost 3.0缓震跑步鞋S80637 DF S80637/17春新款 41/255'
    },{
      img: 't2',
      title: '阿迪达斯男鞋2017春新款运动鞋Ultra boost 3.0缓震跑步鞋S80637 DF S80637/17春新款 41/255'
    },{
      img: 't1',
      title: '阿迪达斯男鞋2017春新款运动鞋Ultra boost 3.0缓震跑步鞋S80637 DF S80637/17春新款 41/255'
    },{
      img: 't',
      title: '【情侣套装 秒杀价79包邮】时尚短袖运动男女套装 7062...'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
