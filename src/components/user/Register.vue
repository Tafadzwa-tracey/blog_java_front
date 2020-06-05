<template>
  <a-form
    id="components-form-demo-normal-register"
    :form="form"
    class="register-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
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
      <a-button type="primary" html-type="submit" class="login-form-button">
        Register
      </a-button>
      Or
      <a href="">
        Login now!
      </a>
    </a-form-item>
  </a-form>

</template>

<script>

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    let config = {
headers: {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
  }
}
      this.form.validateFields((err, values) => {
        if (!err) {
            this.$http.post("http://localhost:8080/user/register",{"me":"test"},config).then(res=>{
                console.log(res.body);
            })
          console.log('Received values of form: ', values);

        }
      });
    },
  },
};
</script>
<style scoped>


#components-form-demo-normal-login .login-form {
  max-width:100%;
  
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 96%;
  background-color: chocolate;
  margin-left:15%;
  margin-right:15%;
  text-align: center;
  border:1px solid grey;
  border-radius:10px;
  padding:7px;
  font-size: 1em;
}

</style>