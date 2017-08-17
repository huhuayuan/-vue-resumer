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
  name: 'Dialog',
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
    background: -webkit-linear-gradient(45deg, #74ebd5, #9face6);
    background: -o-linear-gradient(45deg, #74ebd5, #9face6);
    background: -moz-linear-gradient(45deg, #74ebd5, #9face6);
    background: linear-gradient(45deg, #74ebd5, #9face6);
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
      padding: 16px;
      display: flex;
      justify-content: space-between;
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
