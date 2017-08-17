<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <div class="field" v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="field" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  // data(){
  //   return {
  //   }
  // },
  computed: {
    selected:{
      get(){
        return this.$store.state.selected
      },
      set(value){
        return this.$store.commit('switchTab',value)
      }
    },
    resume(){
      return this.$store.state.resume
    }
  },
  methods: {
    changeResumeField(path,value){
      this.$store.commit('updateResume',{path,value})
    }
  }
}

</script>

<style lang="scss">
  #editor {
    width: 20em;
    display: flex;
    // flex-direction: row;
    > nav {
      color: #fff;
      width: 50px;
      > ol > li{
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active{
          background: rgb(54,185,183);
          color: #fff;
        }
      }
    }
    .panels {
      overflow: auto;
      flex-grow: 1;
      background: #272c34;
      >li {
        padding: 24px;
      }
    }
    .field {
      >label {
        display: block;
        color: #eee;
      }
      input[type='text']{
        margin: 16px 0;
        border: 1px solid #ddd;
        width: 100%;
        height: 40px;
        padding: 0 8px;
        box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.2);
        border-radius: 5px;
        &:focus {
          outline: none;
        }
      }
    }
  }
  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
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
