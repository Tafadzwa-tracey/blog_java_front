<template>
    <!-- <div slot="footer"><b>ant design vue</b> footer part</div> -->
    <div > 

   <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="this.myData">
    <!-- <div slot="footer"><b>ant design vue</b> footer part</div> -->
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
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
      {{ item.content }}
    </a-list-item>
  </a-list>
  <CommentList v-if="this.item.comments.length!=0" :comments="this.item.comments"></CommentList>
  <CommentPost v-if="this.$root.member.id!=null" :post="this.item"></CommentPost>
    </div>
</template>
<script>
//import {baseUrl} from "../../../config"
 import CommentList  from "./../comment/List";
import CommentPost from "./../comment/Post";
export default {
components: {
     CommentList,
    CommentPost
  },
  data() {
    return {
      item:{},
      myData:[],
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  mounted (){
    
  },
  created(){
   this.item = this.$route.params.value;
  this. myData=[this.item];
  console.log(this.item);
  
  },

  methods: {

  },
};
</script>
<style scoped>

</style>