import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import Home from '../components/Home'
import About from '../components/About'
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
