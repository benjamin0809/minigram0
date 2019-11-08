//index.js
//获取应用实例
import { IMyApp } from '../../app'

const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    items: [{
      id: 'favourite',
      routeUrl: '../my/favourite/favourite'
    }, {
        id: 'activities',
        routeUrl: '../my/activities/activities'
      }, {
        id: 'publish',
        routeUrl: '../my/publish/publish'
      }, {
        id: 'setting',
        routeUrl: '../my/setting/setting'
      }, {
        id: 'about',
        routeUrl: '../my/about/about'
      },]
  },
  //事件处理函数
  bindViewTap() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // }) 

    wx.login({
      success: res => {
        console.log(res.code)
      }
    })
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        console.log(res)
      }
    })
  },
  onLoad() { 
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tapItem(e: any) {
    const id = e.currentTarget.id;

    const item = this.data.items.find(p => p.id === id) || { routeUrl: ''};
    wx.navigateTo({
      url: item.routeUrl
    })
  },
  add() {
    
  }
})
