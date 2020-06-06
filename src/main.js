import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Home from "./components/home/Home";
import Register from './components/user/Register';
import Login from './components/user/Login';
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(Antd);
const router = new VueRouter({
  routes: [
    {path:"",component:Home,name:"home"},
    {path:'/register',component:Register,name:"register"},
    {path:'/login',component:Login,name:"login"},
  ],
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
