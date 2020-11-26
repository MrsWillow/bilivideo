import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// import Home from '../components/Home'
// import About from '../components/About'
// import User from "../components/User";
//路由懒加载
const Home = () => {import('../components/Home')}
const About = () => {import('../components/About')}
const User = () => {import('../components/User')}
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
  },
  {
    path: '/user/:name',
    component: User
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'  // 对应路由匹配成功时，当前元素class
})
export default router
