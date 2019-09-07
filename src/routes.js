//路由引入
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Deliver from './components/about/Deliver'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from "./components/about/contact/Phone"
import PersonName from "./components/about/contact/PersonName"
//路由
export const routes = [
    {path:'/',name:"homeLink",components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Deliver,
      'history':History
    }},
    {path:'/menu',name:"menuLink",component:Menu},
    // 路由独享守卫
    {path:'/admin',name:"adminLink",component:Admin,
      // beforeEnter:(to,from,next) => {
      // alert('非登陆状态，不能访问此页面！');
      // next('/')
      //判断store.gettes.isLogin === false
      // if(to.path == '/login' || to.path == "/register"){
      //   next();
      // }else{
      //   alert("还没登陆，请先登陆");
      //   next('/login')
      // }
      // }
    },
    {path:'/about',name:"aboutLink",redirect:'/contact',component:About,children:[
      //二级路由
      {path:'/contact',name:'contactLink',redirect:'/phone',component:Contact,children:[
        //三级路由
        {path:'/phone',name:'phoneNumber',component:Phone},
        {path:'/personname',name:'personName',component:PersonName}
      ]},
      {path:'/deliver',name:'deliverLink',component:Deliver},
      {path:'/history',name:'historyLink',component:History},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
    {path:'/login',name:"loginLink",component:Login},
    {path:'/register',name:"registerLink",component:Register},
    {path:'*',redirect:'/'}
  ]
 
  