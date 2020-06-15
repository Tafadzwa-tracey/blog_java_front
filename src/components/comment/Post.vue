<template>
  <div>
    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            Add Comment
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<script>
import moment from 'moment';
import {baseUrl} from "../../../config";
export default {
   props: ["post"],
  data() {
    return {
      param:{"userID":this.$root.member.id,"postID":this.post.id,"approveID":0,},
      comments: [],
      submitting: false,
      value: '',
      moment
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        
        return;
      }
      this.submitting=true;
           this.param.content = this.value;
             this.$http.post(baseUrl+"comment/save",this.param).then(res=>{
            console.log(res.body);
          if(res.body.code===1){
          //  this.$router.push({name: 'home', params: {foo: 1}};
         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(this.submitting=false));
          // alert('submit!');
console.log(this.value);
console.log(baseUrl);
      this.submitting = false;
    },
    handleChange(e) {
      console.log(this.post);
      this.value = e.target.value;
    },
  },
};
</script>
