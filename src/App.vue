<template>
  <div>
    <div id="app">
      <Editor class="leftbar"/>
      <main>
        <div class="content">
          <header>
            <Topbar class="topbar"/>
          </header/>
          <Preview class="preview"/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import icons from './assets/icons'
import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
  name: 'app',
  store,
  components: {
    Topbar,Editor,Preview
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons);
    let state = localStorage.getItem('state');
    if(state){
      state = JSON.parse(state);
    }
    this.$store.commit('ininState',state)
    this.$store.commit('setUser',getAVUser())
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
    background-color: #5a6a7a;
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
