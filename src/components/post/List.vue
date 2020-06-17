<template  >
 
  <a-list  item-layout="vertical" size="small" :pagination="pagination" :data-source="listData">
      <a-list-item class="post" v-on:click="toView(item)" slot="renderItem" key="item.title" slot-scope="item">
       <div class="post-top">
         <a-avatar  :src="'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'" />
        <a  :href="item.href">{{ item.title }}</a><br/>
       </div>
      <img
        height="600"
        width="800"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      /><br/>
      <h3 class="post-description">{{ item.shotDescription }} </h3>
       
      <br/>
      <template>
  <div>
    <div>
      <a-tag v-for="tag in item.tags" :key="tag.id" color="pink">
        {{tag.name}}
      </a-tag>
    </div>
  </div>
</template>
        <template>
        <span :key="type" style="margin-right: 8px">
          <a-icon :type="'read'" style="margin-right: 5px" />
          {{ 1 }}
        </span>
        <span :key="type" style="margin-right: 8px">
          <a-icon :type="'like-o'" style="margin-right: 5px" />
          {{ 1 }}
        </span>
         <span :key="type" style="margin-right: 8px">
          <a-icon :type="'message'" style="margin-right: 5px" />
          {{ item.commentsCount }}
        </span>
      </template>
    </a-list-item>
  
  </a-list>
</template>
<script>
import {baseUrl} from "../../../config";
var listData = [];


export default {



  data() {
    return {
      listData,
      actions: [
        { type: 'read', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  mounted (){
    console.log(this.$member);
      this.getData();
  },
  methods: {
      getData(){
this.$http.post(baseUrl+"post/list",{}).then(res=>{
            console.log(res.body);
          if(res.body.code===1){
              this.listData=res.body.data;
           console.log(res.body);

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(false));
},

toView(item){
  this.$router.push({name: 'postView', params: {value: item}})
   /* this.$router.push({path:'/post/view' ,query:{value:this.item}});*/

}
  }
};
</script>
<style>
.post{
  width: 1000px;
  text-align: center;
  padding-left:20px ;
  align-content: center;
  margin: auto;
  padding-right:20px;
  background-color: white;
}
.post-top {
  position: relative;
  margin-left: 0px;
}
.post-description{
  text-align: center;
  max-width: 400px;
  margin: auto;
  align-self: center;
}
</style>