<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <input type="text" v-model="formData.username" required>
        <label>用户名</label>
      </div>
      <div class="row">
        <input type="password" v-model="formData.password" required>
        <label>密码</label>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'
import getErrorMessage from '../lib/getErrorMessage'
export default {
  name: 'SignUpForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  created(){
  },
  methods: {
    signUp(){
      let {username,password} = this.formData;
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(()=>{
        // this.$emit('success',{
        //   username: loginedUser.attributes.username,
        // id: loginedUser.id
        // })
        this.$emit('success',getAVUser())
      },(error)=>{
        // alert(JSON.stringify(error))
        this.errorMessage = this.getErrorMessage(error)
      })
    }
  }
}
</script>

<style scoped  lang="scss">
.row{
  position: relative;
  label {
    position: absolute;
    left:0;
    top: 5px;
    transition: 0.3s;
    line-height: 40px;
  }
  input {
    width: 280px;
    height: 42px;
    // line-height: 42px;
    // margin-top: 2em;
    // padding: 0 12px;
    // background-color: rgba(42,42,42,.15);
    // border: 1px solid rgba(255,255,255,.15);
    // border-radius: 6px;
    // box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    // font-size: 14px;
    // color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    &:focus {
      outline: none;
      box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset, 0 2px 7px 0 rgba(0,0,0,.2);
    }
  }
}

.row input:focus + label, .row input:valid + label {
    font-size: 12px;
    -ms-transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
}

.row input:focus, .row input:valid {
    outline: none;
    color: #40b0ff;
    box-shadow: 0 1px #40b0ff;
    border-color: #40b0ff;
}
.row input {
    position: relative;
    z-index: 3;
    height: 35px;
    background: none;
    border: none;
    padding: 5px 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-bottom: 1px solid #777;
}
.row + .row {
  margin-top: 30px;
}
.actions {
  text-align: center;
  input {
    background: #ff842c;
    padding: 8px 16px;
    color: #fff;
    border: 0;
    border-radius: 6px;
  }
}
</style>
