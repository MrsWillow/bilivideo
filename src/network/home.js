import { request } from "./request";
export function getHomeMultidata() {
  //  把request的返回值给返回了
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

