// 有判断逻辑的时候建议写在 actions 里
import { ADD_COUNTER,ADD_TO_CART } from "./mutation-types";
export default {
  addCart(context,payLoad) {
    return new Promise((resolve,reject) => {
      // payLoad 新添加的商品
      // 查找之前数组中是否有 payLoad
      let oldProduct = context.state.cartList.find(item => item.iid == payLoad.iid)
      if (oldProduct) {
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品数量+1')
      } else {
        payLoad.count = 1
        context.commit(ADD_TO_CART,payLoad)
        resolve('添加了新的商品')
      }
    })
  }
}
