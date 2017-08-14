<template>
  <div id="leftbar">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">{{index}}</li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">{{resume[item.field]}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Leftbar',
  data(){
    return {
      selected: 'profile',
      resume: {
        config: [
          {field: 'profile',icon:'id'},
          {field: 'work history',icon:'work'},
          {field: 'education',icon:'book'},
          {field: 'projects',icon:'heart'},
          {field: 'awards',icon:'cup'},
          {field: 'contacts',icon:'phone'}
        ],
        profile: {
          name: '',
          city: '',
          title: ''
        }
      }
    }
  }
}

</script>

<style lang="scss">
  #leftbar {
    display: flex;
    flex-direction: row;
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
    }
  }
</style>
