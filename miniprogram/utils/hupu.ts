 
import {
  httpGet 
} from './http'
const fetchHupuImages = (offset: number): Promise<any> =>{
  return httpGet('https://www.popochiu.com/hupu/getMobileImages', {
    offset
  }) 
}

const getOpenId = (code: string): Promise<any> => {
  return httpGet('https://www.popochiu.com/wechat/getOpenId', {
    code
  })
}

export {
  fetchHupuImages,
  getOpenId
}