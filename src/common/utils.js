// 每次加载图片都执行refresh频率太高
// 防抖
export function debounce(func,delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this,args)
    },delay)
  }
}
