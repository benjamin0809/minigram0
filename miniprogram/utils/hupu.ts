 
import {
  httpGet 
} from './http'
const fetchHupuImages = (offset: number) =>{
  return httpGet('https://www.popochiu.com/hupu/getMobileImages', {
    offset
  }) 
}

export {
  fetchHupuImages
}