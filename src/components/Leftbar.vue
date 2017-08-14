<template>
  <div id="leftbar">
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
        <div class="field" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
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
      flex-grow: 1;
      >li {
        padding: 24px;
      }
    }
    .field {
      >label {
        display: block;
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
</style>
