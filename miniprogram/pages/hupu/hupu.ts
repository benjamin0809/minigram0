import { fetchHupuImages } from '../../utils/hupu'


const IMAGE_WIDTH = (wx.getSystemInfoSync().windowWidth - 48) / 2
const VH30 = wx.getSystemInfoSync().windowHeight * 0.3

const generate = (): HupuImage[] => {
  const array: HupuImage[] = []
  return array
}
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
    files: generate(),
    leftdata: generate(),
    rightdata: generate(),
    length: 0,
    total: generate(),
    leftlength: 0,
    rightlength: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    wx.showLoading({ title: '拼命加载中...' });
    try {
      const res: any = await fetchHupuImages(this.data.offset)
      const data = res['data'] || [];
      const length = data.length;
      data.forEach((item: HupuImage, index: number) => {
        item.realheight = item.height * IMAGE_WIDTH / item.width > VH30 ? VH30 : item.height * IMAGE_WIDTH / item.width
        item.imageheight = item.height / item.width * IMAGE_WIDTH  
        index % 2 === 0 ? this.data.leftdata.push(item) : this.data.rightdata.push(item)
      })
      this.setData!({ 
        leftdata: this.data.leftdata, 
        rightdata: this.data.rightdata, 
        length, 
        total: data,
        offset: length });
    } catch (e) {
      wx.showToast({
        title: "出错了",
        icon: 'success',
        duration: 2000
      })
    } finally {
      wx.hideLoading();
    }
  },

  async loadmore() {
    const res = await fetchHupuImages(this.data.offset);
    
    const data = res['data'] || [];
    const length = data.length + this.data.length;

    for (let i = 0; i < data.length; i += 2) {
      let left_item: HupuImage
      let right_item: HupuImage

      data[i].realheight = data[i].height * IMAGE_WIDTH / data[i].width > VH30 ? VH30 : data[i].height * IMAGE_WIDTH / data[i].width
      data[i+1].realheight = data[i+1].height * IMAGE_WIDTH / data[i+1].width > VH30 ? VH30 : data[i+1].height * IMAGE_WIDTH / data[i+1].width

      data[i].imageheight = data[i].height / data[i].width * IMAGE_WIDTH   
      data[i + 1].imageheight = data[i + 1].height / data[i + 1].width * IMAGE_WIDTH  

      // 左边数据高度大于右边数据高度 并且 当前对象高度大于下一个对象高度时
      // 左边数据高度小于右边数据高度 并且 当前对象高度小于下一个对象高度
      // 将下一个对象放进左边数组，否则 放在右边
      if ((this.data.leftlength > this.data.rightlength && data[i].realheight > data[i + 1].realheight) ||
        (this.data.leftlength < this.data.rightlength && data[i].realheight < data[i + 1].realheight)
      ) {
        left_item = data[i + 1]
        right_item = data[i]
      } else {
        left_item = data[i]
        right_item = data[i + 1]
      }
      if (!this.data.total.some((item: HupuImage) => item.id == left_item.id)) {
        this.data.leftdata.push(left_item)
        this.data.leftlength += left_item.realheight
      }

      if (!this.data.total.some((item: HupuImage) => item.id == right_item.id)) {
        this.data.rightdata.push(right_item)

        this.data.rightlength += right_item.realheight
      } 
    }
    this.data.total.push(...data)
    this.setData!({
      leftdata: this.data.leftdata,
      rightdata: this.data.rightdata, 
      length,
      offset: length,
      rightlength: this.data.rightlength,
      leftlength: this.data.leftlength,
      total: this.data.total
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
  async onPullDownRefresh() {
    console.log("onPullDownRefresh")
 

    try {
      const res: any = await fetchHupuImages(0)
      const data = res['data'] || [];
      const length = data.length;
      this.data.leftdata = []
      this.data.rightdata = []
      this.data.leftlength = 0
      this.data.rightlength = 0
      data.forEach((item: HupuImage, index: number) => {
        item.realheight = item.height * IMAGE_WIDTH / item.width > VH30 ? VH30 : item.height * IMAGE_WIDTH / item.width
        item.imageheight = item.height / item.width * IMAGE_WIDTH
        index % 2 === 0 ? this.data.leftdata.push(item) : this.data.rightdata.push(item)
      })
      this.setData!({
        leftdata: this.data.leftdata,
        rightdata: this.data.rightdata,
        length,
        total: data,
        offset: length
      });
    } catch (e) {
      wx.showToast({
        title: "出错了",
        icon: 'success',
        duration: 2000
      })
    } finally {
      wx.stopPullDownRefresh()
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.loadmore()
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
  }, 
  previewImage(e: any) {
    const current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: [current] // 需要预览的图片http链接列表
    })
  }
})