import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  render: h => h(App),
}).$mount('#app')
