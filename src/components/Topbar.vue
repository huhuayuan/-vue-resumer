<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <button class="success">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
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

  button {
    padding: 6px 12px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background-color: #ccc;
    color: #333;
    &:hover {
      box-shadow: 1px 1px 1px rgba(0,0,0,.5);
    }
    &.success {
      background-color: rgb(51,189,140);
      color: #fff;
    }
  }

</style>
