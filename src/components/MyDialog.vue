<template>
  <div class="cover" v-show="visible">
    <div class="dialog">
      <header>
        {{title}}
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: ['title','visible'],
  methods: {
    close(){
      this.$emit('close')
    }
  }
}

</script>

<style lang="scss">
  .cover {
    position: fixed;
    background: -webkit-linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    background: -o-linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    background: -moz-linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    // background: -webkit-linear-gradient(45deg, #74ebd5, #9face6);
    // background: -o-linear-gradient(45deg, #74ebd5, #9face6);
    // background: -moz-linear-gradient(45deg, #74ebd5, #9face6);
    // background: linear-gradient(45deg, #74ebd5, #9face6);

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog {
    background: #fff;
    min-height: 4em;
    min-width: 10em;
    >header {
      text-align: center;
      padding: 16px;
      color: #3e9ed0;
      font-size: 20px;
      // display: flex;
      // justify-content: space-between;
      // background-color: #7cb6d0;
      .close {
        position: fixed;
        top: 20px;
        right: 20px;
      }
    }
    >main {
      padding: 16px;
    }
  }
</style>


<!-- <template>
  <div id="editor">
    editor
  </div>
</template>

<script>
export default {
  name: 'Editor'
}

</script>

<style>
  #editor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  }
</style> -->
