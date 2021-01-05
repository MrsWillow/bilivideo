import Toast from "./Toast";
const obj = {}
// 执行install函数会传入Vue
obj.install = function (Vue) {
  // 1 创建组件构造器
  const toastConsrustor = Vue.extend(Toast)
  // 2 new 的方式 根据组件构造器可以创建出来一个组件对象
  const toast = new toastConsrustor()
  // 3 将数组对象手动挂载到某一元素上
  toast.$mount(document.createElement('div'))
  // 4 toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}
export default obj
