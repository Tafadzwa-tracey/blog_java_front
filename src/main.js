import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Home from "./components/home/Home";
import Register from './components/user/Register';
import Login from './components/user/Login';
import PostPost from "./components/post/Post";
import PostView from "./components/post/View";
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false
const config = require('../config');
window.config = config;
Vue.use(Antd);
const router = new VueRouter({
  routes: [
    {path:"",component:Home,name:"home"},
    {path:'/register',component:Register,name:"register"},
    {path:'/login',component:Login,name:"login"},
    {path:'/post/post',component:PostPost,name:'postPost'},
    {path:'/post/view',component:PostView,name:'postView'}
  ],
  mode:'history'
})
new Vue({
  data:{
    member:{}
  },
  router,
  render: h => h(App),
}).$mount('#app')
