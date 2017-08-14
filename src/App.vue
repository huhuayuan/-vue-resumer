<template>
  <div id="app">
    <div class="leftbar">
      <Leftbar />
    </div>
    <main>
      <Editor class="editor"/>
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
import Leftbar from './components/Leftbar'
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  components: {
    Leftbar,Topbar,Editor,Preview
  }
}
</script>

<style>
  #app {
    height: 100vh;
    display: flex;
    flex-direction: row;
    background: #eaeaea;
  }
  .leftbar {
    background-color: #323641;
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

</style>
