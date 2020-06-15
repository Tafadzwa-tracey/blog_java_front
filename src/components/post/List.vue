<template>
 
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <!-- <div slot="footer"><b>ant design vue</b> footer part</div> -->
      <a-list-item v-on:click="toView(item)" slot="renderItem" key="item.title" slot-scope="item">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        width="200"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      />
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
      {{ item.shotDescription }}
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
        { type: 'star-o', text: '156' },
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

</style>