<template>
  <div id="preview">
    <section data-name="profile" v-show="resume.profile">
      <h1>{{resume.profile.name}}</h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <!-- <small>{{resume.profile.birthday}}</small> -->
      </p>
    </section>
    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>
    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="education" v-show="resume.education">
      <h2>教育经历</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-show="resume.contacts">
      <h2>联系方式</h2>
      <ol>
        <li v-for="item in resume.contacts">
          <p>
            <span>{{item.contact}}</span>
            <span v-show="item.content"> - {{item.content}}</span>
          </p>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Preview',
    computed: {
      resume(){
        return this.$store.state.resume
      }
    },
    created() {
      console.log(this.resume)
    }
  }
</script>

<style lang="scss">
  #preview {
    flex: 1;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
    padding: 16px;
    color: #333;
    line-height: 1.2;
    overflow: auto;
    * {
      padding: 0;
      margin: 0;
      font-weight: normal;
    }
    section + section {
      margin-top: 2em;
    }
    p {
      white-space: pre-line;
    }
    section {
      > h2:first-child {
        background-color: #ddd;
        display: inline-block;
        padding: .2em;
        margin-bottom: .5em;
      }
    }
    section[data-name="profile"]{
      > h1 {
        margin: .1em 0;
        font-size: 2em;
      }
    }
    section[data-name="workHistory"],
    section[data-name="projects"],
    section[data-name="awards"]
    {
      li + li {
        margin-top: 1em;
      }
      li {
        h3 {
          border-bottom: 1px dashed #999;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
    }
    section[data-name="education"]{
      li {
        line-height: 1.5em;
      }
    }
    section[data-name="contacts"]{
      li {
        line-height: 1.5em;
      }
    }
  }
</style>
