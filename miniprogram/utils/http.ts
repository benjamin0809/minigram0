const request = (requestMethod: 'GET' | 'POST', url: string, data: any) =>{
  return new Promise((resolve: any, reject: any) =>{
    wx.request({
      url, //仅为示例，并非真实的接口地址
      data,
      method: requestMethod,
      header: {
        'content-type': 'application/json' // 默认值
      },
      dataType: 'json',
      success: resolve,
      fail: reject,
      complete: requestComplete
    }) 
  })
}

const httpGet = (url: string, data: any) =>{
  return request('GET', url, data)
}

const httpPost = (url: string, data: any) =>{
  return request('POST', url, data)
}

// 请求完成事件
const requestComplete = () => {

}

export {
  httpGet,
  httpPost
}