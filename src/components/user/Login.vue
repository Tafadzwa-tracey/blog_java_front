<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
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
      <a class="login-form-forgot" href="">
        Forgot password?
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <router-link to='/register'>
        register now!
      </router-link>
    </a-form-item>
  </a-form>

</template>

<script>
import {baseUrl} from "../../../config";

export default {
  
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$http.post(baseUrl+"user/login",values).then(res=>{
            console.log(res.body);
        
          if(res.body.code===1){
          this.$root.member = res.body.data;
          console.log(this.$member);
           console.log(res.body);
           this.$router.push({name: 'home', params: {member: res.body.data}})

         }
          }).catch(e=>{
            console.log(e);
           }).finally(()=>(false));
        }
      });
    },
  },
};
</script>
<style scoped>

.login-form{
  margin-top:60px;
  margin-left:30%;
  margin-right:30%;
  border: 1px solid rgb(22, 107, 177);;
  border-radius:1.5em;
}
#components-form-demo-normal-login .login-form {
  max-width:100%;
  
}

.form-items{
  margin-top:10%;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
  margin-right:5%;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  background-color: rgb(22, 107, 177);;
  text-align: center;
  border:1px solid grey;
  border-radius:10px;
  padding:7px;
  font-size: 1em;
  height:auto;
}

</style>