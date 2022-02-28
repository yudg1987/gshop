/**
 * 路由器
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import shop from '../pages/Shop/shop'
import shopGoods from '../pages/Shop/shopGoods'
import shopInfo from '../pages/Shop/shopInfo'
import shopRatings from '../pages/Shop/shopRatings'
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true // 当前路由控制是否显示底部footer
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/shop',
      component: shop,
      children:[
        {
          path: '/shop/goods',
          component: shopGoods
        },
        {
          path: '/shop/ratings',
          component: shopRatings
        },
        {
          path: '/shop/info',
          component: shopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
