import { request } from "./request";

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getSubDetail(miniWallkey) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey
    }
  })
}
