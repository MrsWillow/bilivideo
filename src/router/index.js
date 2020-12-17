import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
//路由懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
// const routes = [
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home,
//     // meta: 元数据(描述数据的数据)
//     meta: {
//       title: '首页'
//     },
//     children: [
//       {
//         path: '',
//         redirect: 'news'
//       },
//       {
//         path: 'news',  // 子路由不需要加 '/'
//         component: HomeNew
//       },
//       {
//         path: 'message',  // 子路由不需要加 '/'
//         component: HomeMessage
//       },
//     ]
//   },
//   {
//     path: '/about',
//     component: About,
//     meta: {
//       title: '关于'
//     },
//   },
//   {
//     path: '/user/:name',
//     component: User,
//     meta: {
//       title: '用户'
//     },
//   },
//   {
//     path: '/profile',
//     component: Profile,
//     meta: {
//       title: '档案'
//     },
//   }
// ]

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
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
  // linkActiveClass: 'active'  // 对应路由匹配成功时，当前元素class
})


// // 前置守卫 guard
// router.beforeEach((to,from,next) => {
//   // 从 from 跳转到 to
//   document.title = to.matched[0].meta.title
//   next() //必须调用该函数，不然不能跳转
// })
//
// //后置钩子 hook
// router.afterEach((to,from,) => {
//
// })
export default router
