<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined">
          <span>你好,{{user.username}}</span>
          <a class="button" href="#">登出</a>
        </div>
        <div v-else>
          <a class="button success" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            <SignUpForm @success="login($event)"/>
          </MyDialog>
          <a class="button" href="#">登录</a>
        </div>
        <button class="button success">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    logined(){
      return this.user.id
    }
  },
  components: {
    MyDialog, SignUpForm
  },
  methods: {
    login(user){
      this.signUpDialogVisible = false;
      this.$store.commit('setUser', user)
    }
  }
}
</script>

<style scoped  lang="scss">
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
    height: 50px;
    line-height: 50px;
    padding: 0 16px;
    > .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 24px;
      color: rgb(51,189,140);
    }
  }

  .button {
    width: 60px;
    height: 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background-color: #ccc;
    color: #333;

    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      box-shadow: 1px 1px 1px rgba(0,0,0,.5);
    }
    &.success {
      background-color: rgb(51,189,140);
      color: #fff;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    .button {
      margin-left: .5em;
    }
  }

</style>
