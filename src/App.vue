<template>
  <div id="app">
    <div class="leftbar">
      <Editor class="editor"/>
    </div>
    <main>
      <div class="content">
        <header>
          <Topbar  class="topbar"/>
        </header/>
        <Preview class="preview"/>
      </div>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import icons from './assets/icons'

export default {
  name: 'app',
  components: {
    Topbar,Editor,Preview
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons);
  }
}
</script>

<style lang="scss">
  #app {
    height: 100vh;
    display: flex;
    flex-direction: row;
    background: #eaeaea;
  }
  .leftbar {
    background-color: #323641;
    display: flex;
  }
  .topbar {
    background: pink;
  }
  #app main {
    display: flex;
    flex-grow: 1;
    // min-width: 1024px;
    /*max-width: 1400px;*/
    /*margin-top: 16px;
    margin-bottom: 16px;*/
  }
  main .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  main > .editor {
    width: 20em;
    background: #444;
  }
  main > .preview {
    flex: 1;
    background: #777;
  }
  svg.icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

</style>
