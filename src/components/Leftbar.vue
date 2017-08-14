<template>
  <div id="leftbar">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.visibleItems" :class="{active: item === selected}" @click="selected = item">{{index}}</li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.visibleItems" v-show="item === selected">{{resume[item]}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Leftbar',
  data(){
    return {
      selected: 'bio',
      resume: {
        visibleItems: ['bio','work history','education','projects','awards','contacts','others'],
        bio: {
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
