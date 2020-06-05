<template>
  <div id="app">
    <Register msg="Login"/>
  </div>
</template>

<script>
import Register from './components/user/Register.vue'
export default {
  name: 'App',
  components: {
    Register,
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
