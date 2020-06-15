import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router';
import Home from "@/components/home/Home.vue";
import Register from '@/components/user/Register';
import Login from '@/components/user/Login';
import PostPost from "@/components/post/Post";
import PostView from "@/components/post/View";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:"",component:Home,name:"home"},
        {path:'/register',component:Register,name:"register"},
        {path:'/login',component:Login,name:"login"},
        {path:'/post/post',component:PostPost,name:'postPost'},
        {path:'/post/view',component:PostView,name:'postView'}
      ],
      mode:'history'

})
