<template>
  <a-list
    class="comment-list"
    item-layout="horizontal"
    :data-source="this.comments"
  >
    <a-list-item slot="renderItem" slot-scope="item">
      <a-comment :author="item.user.username" :avatar="'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'">
        <p slot="content">
          {{ item.content }}
        </p>
        <!-- <a-tooltip slot="pubDate" :title="item.pubDate.format('YYYY-MM-DD HH:mm:ss')">
          <span>{{ item.pubDate.fromNow() }}</span>
        </a-tooltip> -->
      </a-comment>
    </a-list-item>
  </a-list>
</template>
<script>
import moment from 'moment';
export default {
  created(){
console.log(this.comments);
  },
   props: ["comments"],
  data() {
    return {
      moment,
    };
  },
};
</script>
