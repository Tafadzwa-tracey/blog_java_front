<template>
  <div id="app">
    <Register />
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
  padding:0;
  margin:0;
}
</style>
