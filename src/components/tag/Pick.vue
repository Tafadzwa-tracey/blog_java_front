<template>
  <a-select
    mode="multiple"
    style="width: 100%"
    placeholder="Please select"
    @change="handleChange"
  >
    <a-select-option v-for="item in listTag" :key="item.id">
      {{item.name }}
    </a-select-option>
  </a-select>
</template>
<script>
import {baseUrl} from "../../../config";
import moment from 'moment';
var listTag = [];
export default {
    data(){
        return {
            listTag,
            moment,
        }
    },
    mounted(){
        this.getData();
        
    },
  methods: {
      getData(){
this.$http.post(baseUrl+"tag/list",{}).then(res=>{
          if(res.body.code===1){
         this.listTag= res.body.data;
           console.log(this.listCategory);

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(false));},
    handleChange(value) {
       this.$emit('onSave',value);
    },

  },
};
</script>
