<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="layout-header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-button icon="search" class = "search-button">
            Search
        </a-button>
         
        <a-menu-item key="1" >
          <router-link to="">
            Language
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
           <router-link to="/login">
            Login 
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to='/register'>
            Register
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Comments
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
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