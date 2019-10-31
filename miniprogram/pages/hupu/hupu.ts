import {
  fetchHupuImages
} from '../../utils/hupu'

Page({ 
    /**
     * 页面的初始数据
     */
    data: {
      title: 'hupu',
      id: 1,
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500,
      offset: 0,
      files: []
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      wx.showLoading({ title: '拼命加载中...' });
      fetchHupuImages(this.data.offset).then(res=>{
        this.setData({
            files: res['data'] || []
          })
        wx.hideLoading();
      }) 
    },
  
    loadmore() {
      fetchHupuImages(this.data.offset).then(res => {
        this.setData({
          files: res['data'] || []
        }) 
      }) 
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
      console.log("onPullDownRefresh")
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
      console.log("onReachBottom")
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
      return {
          title: this.data.title,
          desc: this.data.title,
          path: '/pages/item?id=' + this.data.id
        }
    }
  })