<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <a class="button success" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <Dialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          这是替换的内容
        </Dialog>
        <a class="button" href="#">登录</a>
        <button class="button success">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false
    }
  },
  components: {
    Dialog
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

</style>
