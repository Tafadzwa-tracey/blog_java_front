<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="title" label="Title" prop="title">
      <a-input
        v-model="form.title"
        @blur="
          () => {
            $refs.title.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
     <a-form-model-item label="short description" prop="shotDescription">
      <a-input v-model="form.shotDescription" type="textarea" />
    </a-form-model-item>
   
    <a-form-model-item label="Content" prop="content">
      <a-input v-model="form.content" type="textarea" />
    </a-form-model-item>
     <a-form-model-item label="Category" prop="category">
      <CategoryPick @onSave="save" v-model="form.categoryID"></CategoryPick>
    </a-form-model-item>
     <a-form-model-item label="Tags" prop="category">
      <TagPick @onSave="saveTag" v-model="form.tagIDs"></TagPick>
    </a-form-model-item>
     <a-form-model-item label="Allow Comments" prop="isCommentID">
      <a-switch v-model="form.isComment" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }"  >
      <a-button type="primary" @click="onSubmit" >
        Post
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import {baseUrl} from "../../../config";
import CategoryPick from "../category/Pick";
import TagPick from "../tag/Pick";
export default {
  components:{
CategoryPick,
TagPick,
},
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      form: {
        tagIDs:"",
        title: '',
        categoryID:"",
        isComment: true,
        shotDescription:'',
        content:"",
        isCommentID: 2,
        userID:""
        
        
      },
      rules: {
        title: [
          { required: true, message: 'Please input post name', trigger: 'blur' },
          { min: 5, max:100, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {
    saveTag(value){
      console.log(value);
      this.form.tagIDs=value;

    },
    save(value){
console.log("****************got some value*******");
this.form.categoryID=value;
console.log(value);
console.log("****************got some value*******");
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid=> {
         console.log(this.form);
        if (valid) {
            if(this.form.isComment){
this.form.isCommentID=1;
            }
            if(this.form.tagIDs.length>0){
this.form.tagIDs=this.form.tagIDs.toString();
            } else {
              this.form.tagIDs="";
            }
            this.form.userID=this.$root.member.id
            
             this.$http.post(baseUrl+"post/save",this.form).then(res=>{
            console.log(res.body);
          if(res.body.code===1){
          // this.$router.push({name: 'home', params: {foo: 1}})

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(false));
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>