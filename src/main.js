import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'

import {store} from './store/store.js'

Vue.use(VueRouter)

//配置axios默认的根路径
axios.defaults.baseURL = 'https://pizaa-1d870.firebaseio.com/'

//配置Vue原型(可以在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  mode:'history',
  //滚动行为的控制
  // scrollBehavior(to,from,savedPosition){
  //   // return {x:0,y:100}
  //   // return {selector:'.btn'}
  //   if(savedPosition){
  //     return savedPosition
  //   }else{
  //     return {x:0,y:100}
  //   }
  // }
})

//全局守卫
// router.beforeEach((to,from,next) => {
//   // alert("还没登陆，请先登陆");
//   // next();

//   //判断store.gettes.isLogin === false
//   if(to.path == '/login' || to.path == "/register"){
//     next();
//   }else{
//     alert("还没登陆，请先登陆");
//     next('/login')
//   }
// })

//后置钩子
// router.afterEach((to,from) => {
//   alert("after each")
// })


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
