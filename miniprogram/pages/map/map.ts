// miniprogram/pages/map.js
import { fetchHupuImages } from '../../utils/hupu';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [],
    offset: 0,
    enableAnimation: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad () {
    const res: any = await fetchHupuImages(this.data.offset);
    const data = res['data'] || [];
    const result: any = [];
    data.forEach((item: HupuImage, index: number) => {
      const itema: any = {
        elementclass: 'face' + (index + 1),
        url: item.fullpath,
        id: index
      }
      if (index < 12) {
        result.push(itema);
          
      }
      this.setData!({
        background: result
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    this.setData!({
      enableAnimation: false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {
    return {
      title: 'hupu-item',
      desc: 'hupu-item',
      path: '/pages/item?id='
    }
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../hupu-item/hupu-item?id=1'
    })
  },

  startAnimation() {
    this.setData!({
      enableAnimation: !this.data.enableAnimation
    })
  }
})