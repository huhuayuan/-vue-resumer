<template>
  <div id="preview">
    {{resume}}
  </div>
</template>

<script>
  export default {
    name: 'Preview',
    computed: {
      resume(){
        return this.$store.state.resume
      }
    }
  }
</script>

<style>
  #preview {
    flex: 1;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  }
</style>
