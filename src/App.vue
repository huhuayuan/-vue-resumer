<template>
  <div id="app">
    <header>
      <Topbar  class="topbar"/>
    </header/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  data: function(){
    text: 'resumer'
  },
  components: {
    Topbar,Editor,Preview
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #eaeaea;
}
.topbar {
  background: pink;
}
#app main {
  display: flex;
  flex-grow: 1;
  min-width: 1024px;
  /*max-width: 1400px;*/
  /*margin-top: 16px;
  margin-bottom: 16px;*/
  padding: 16px;
}
main > .editor {
  width: 20em;
  background: #444;
}
main > .preview {
  flex: 1;
  background: #777;
}

</style>
