<template>
  <div style="width: 256px">
      <h1>Categories</h1>
    <!-- <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    <a-menu
      class="container"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
       mode="inline"

      :inline-collapsed="collapsed"
   v-for="item in this.listCategory"
   :key="item.id"
    >
     <a-menu-item  key="item.id">
        <span>{{item.name}}</span>
      </a-menu-item>


    </a-menu>
  </div>
</template>

<script>
import {baseUrl} from "../../../config";
import moment from 'moment';
var listCategory = [
    {"name":"All Categories",'id':'1',}
];
export default {

    mounted(){
        this.getData();
    },
  data() {
    return {
         moment,
        listCategory,
      collapsed: false,
    };
  },
  methods: {
      getData(){
this.$http.post(baseUrl+"category/list",{}).then(res=>{
            console.log(res.body);
          if(res.body.code===1){
         this.listCategory= this.listCategory.concat(res.body.data);
           console.log(res.body);

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(false));
},
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.container{
    background-color:aliceblue;
    text-align: left;
}
</style>