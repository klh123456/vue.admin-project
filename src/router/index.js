import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store/index'
Vue.use(VueRouter)
//写一个方法，name代表文件夹 component代表文件名
const getComponent = (name,component)=> ()=>
   import (`@/views/${name}/${component}.vue`);


const routes = [
  {
    path: '/login',
    name: "Login",
    component:getComponent("Login","Login"),
  },
  {
    path: '/',
    redirect:"/login",
    component:getComponent("Login","Login")
  },
  {
    path: '/home',
    component:getComponent("Layout","Layout"),
    // children:[{

    // }]
  },
  
  
]

const router = new VueRouter({
  routes
})
//路由守卫
router.beforeEach((to,from,next)=>{
  Nprogress.start()  //顶部加载条
  if(to.path != '/login' && !store.state.token){
    next('/login');
    Nprogress.done()  //结束顶部加载条
  }else{
    next();
  }
  if(to.meta.roles){
    to.meta.roles.includes(...store.getters.roles) ? next() : next('/404')
  }else{
    next()
  }
})
router.afterEach(() => {
  Nprogress.done() // 结束顶部加载条
})
export default router
