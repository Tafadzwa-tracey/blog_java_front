<template>
  <div id="app">
    <Login msg="Login"/>
  </div>
</template>

<script>
import Login from './components/user/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  width: 100%;
}
</style>
