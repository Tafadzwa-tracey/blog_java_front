import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueResource from 'vue-resource';
import router from './router';

Vue.use(VueResource);

Vue.config.productionTip = false
const config = require('../config');
window.config = config;
Vue.use(Antd);


new Vue({
  data:{
    member:{}
  },
  router,
  render: h => h(App),
}).$mount('#app')
