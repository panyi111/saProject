import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import './assets/global.css'

Vue.use(Router)

export default new Router({
  routes: [
    //路由重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home }
  ]
})
