<template>
<div>
  <a-select
    show-search
    placeholder="Select a person"
    option-filter-prop="children"
    style="width: 200px"
    :filter-option="filterOption"
     
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
    <a-select-option v-for="item in this.listCategory"
     :key="item.id" >
      {{item.name}}
    </a-select-option>
   
  </a-select>
  </div>
</template>
<script>
import {baseUrl} from "../../../config";
import moment from 'moment';
var listCategory = [
   
];
export default {
    data(){
        return {
            listCategory,
            moment,
        }
    },
    mounted(){
        this.getData();
        
    },
  methods: {
           getData(){
this.$http.post(baseUrl+"category/list",{}).then(res=>{
          if(res.body.code===1){
         this.listCategory= res.body.data;
           console.log(this.listCategory);

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(false));
},
    handleChange(value) {
         this.$emit('onSave',value);
    //   console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>
