import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from "./store";
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import { request } from "./network/request";
request({
  url: '/home/data?type=pop&page=1'
}).then(res => {
  console.log(res.data);
})
