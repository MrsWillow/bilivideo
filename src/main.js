import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from "./store";
// 导入 toast文件夹的index文件, 重命名为toast
import toast from "./components/common/toast/";

// 解决移动端300ms延迟
import fastclick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.use(VueRouter)
Vue.config.productionTip = false
// EventBus
Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
fastclick.attach(document.body)

Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

