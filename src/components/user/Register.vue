<template>
  <a-form
    id="components-form-demo-normal-register"
    :form="form"
    class="register-form"
    @submit="handleSubmit"
  >
    <a-form-item class="form-items">
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
     <a-form-item>
      <a-input
        v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email!' }] },
        ]"
        type="email"
        placeholder="Email"
      >
        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
     <a-spin v-if="loading" size="large" />
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
       <a-checkbox
        v-decorator="[
          'userType',
          {
            valuePropName: 'userType',
            initialValue: false,
          },
        ]"
      >
        Register as a Writer
      </a-checkbox>
    
      <a-button  type="primary" html-type="submit" class="login-form-button">
        Sign up
      </a-button>
      Or
      <router-link to="/login">
        Login now!
      </router-link>
    </a-form-item>
  </a-form>

</template>

<script>
import {baseUrl} from "../../../config";
export default {
  beforeCreate() {
  
    this.form = this.$form.createForm(this, { name: 'normal_register' });
  },
   data: function(){
return {
  loading:false
}},

  methods: {
    
    handleSubmit(e) {
    
      e.preventDefault();
      this.form.validateFields( (err, values)  => {
        if(values.userType){
          values.typeID=2;
        } else {
          values.typeID=1;
        }
    
        if (!err) {
           this.loading=true;
          this.$http.post(baseUrl+"user/register",values).then(res=>{
if(res.body.code===1){
    this.$root.member = res.body.data;
           console.log(res.body);
           console.log(this.loading);
           this.$router.push({name: 'home', params: {foo: 1}})

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(this.loading=false));
         
        }
      });
    },
  },

};
</script>
<style scoped>

.register-form{
  margin-top:60px;
  margin-left:30%;
  margin-right:30%;
  border: 1px solid rgb(22, 107, 177);;
  border-radius:1.5em;
}
#components-form-demo-normal-register .login-form {
  max-width:100%;
  
}

.form-items{
  margin-top:10%;
}

#components-form-demo-normal-register .login-form-button {
  width: 100%;
  background-color: rgb(22, 107, 177);
  text-align: center;
  border:1px solid grey;
  border-radius:10px;
  padding:7px;
  font-size: 1em;
  height:auto;
}

</style>