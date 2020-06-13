<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="layout-header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['5']"
        :style="{ lineHeight: '64px' }"
      >
        <a-button icon="search" class = "search-button">
            Search
        </a-button>
         
        <a-menu-item key="1" >
          <router-link v-if="this.$root.member.id!=null" to="/post/post">
            Post
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
           <router-link v-if="this.$root.member.id==null" to="/login">
            Login 
          </router-link>
          <div v-if="this.$root.member.id!=null"  v-on:click="logout">
            Logout
          </div>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to='/register'>
            Register
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
         <div>
          <a-avatar class="avatar">
            U
          </a-avatar>
          </div>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <!-- <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <div class="container">
      <Menu v-if="this.$root.member.typeID==2" class="menu-bar"></Menu>
      <PostList   class="post-list"></PostList>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import PostList from "../post/List";
import Menu from "../user/Menu.vue"
export default {
  name: 'Home',
  components: {
    PostList,
    Menu
  },
  methods:{
logout(){
  this.$root.member={};
}
  }
}
</script>

<style scoped>
.container{
  display:flex;
}
.menu-bar{
  height: auto;
  float: left;
  margin-right:2%;
}
.post-list{
    float: left;
}
.avatar{
    color: #f56a00; 
    background-color: #fde3cf;
}
.search-button{
 text-align: left;
 border:1px solid grey;
 width: 50%;
 margin-right: 2%;
}
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>