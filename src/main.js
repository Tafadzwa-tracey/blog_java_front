import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from "./components/home/Home";
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(Antd);
const router = new VueRouter({
  routes: [
    {path:"/",component:Register,name:"register"},
{path:'/login',component:Login,name:"login"},
{path:'/home',component:Home,name:"home"}
  ],
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
