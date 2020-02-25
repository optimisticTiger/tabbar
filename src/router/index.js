import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App.vue'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  // {
  //   path: '/',
  //   name: 'App',
  //   component: App
  // }
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
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

//3.导出router
export default router
