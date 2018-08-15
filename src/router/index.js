import Vue from 'vue'
import Router from 'vue-router'


// first view

import OpenView from '../components/openView/openView'
// routerNav

import Home from '../routerNav/home/Home'
import Kinds from '../routerNav/kinds/Kinds'
import Profile from '../routerNav/profile/Profile'
import ShopCart from '../routerNav/shopcart/ShopCart'
import Textile from '../routerNav/textile/Textile'
import Login from '../routerNav/login/PhoneLogin'
import Search from '../routerNav/search/Search'
// components





Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/openview',
      component:OpenView,
    },
    {
      path:'/home',
      component:Home,
      meta:{
        isShowFooterGuide: true,
        title:'网易严选 页面title 的内容'
      }
    },
    {
      path:'/profile',
      component:Profile,
    },
    {
      path:'/textile',
      component:Textile,
      meta:{
        isShowFooterGuide: true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta:{
        isShowFooterGuide: true
      }
    },
    {
      path:'/kinds',
      component:Kinds,
      meta:{
        isShowFooterGuide: true
      }
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/search',
      component:Search,
    },
    {
      path: '/',
      redirect: '/openview'  //这里是写路径的！！！！！
    },
  ]
})
