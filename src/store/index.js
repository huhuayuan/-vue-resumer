import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [
        {field: 'profile',icon:'id'},
        {field: 'workHistory',icon:'work'},
        {field: 'education',icon:'book'},
        {field: 'projects',icon:'heart'},
        {field: 'awards',icon:'cup'},
        {field: 'contacts',icon:'phone'}
      ],
      profile: {
        name: '狐某某',
        city: '北京',
        title: '前端开发工程师',
        birthday: '1991-10-24'
      },
      'workHistory': [
        {company: '北京百泉众合数据科技有限公司',content: `公司主做日志分析的。
        我的主要工作如下：
        1.完成产品需求'。
        2.修复bug。`
      },
        {company: '北京建迅教育科技有限公司',content: '我的第一份工作'}
      ],
      education: [
        {school: '山西电力学院',content: '计算机信息安全技术'},
        {school: '洪洞一中'}
      ],
      projects: [
        {name: 'projectA',content: '文字'},
        {name: 'projectB',content: '文字'}
      ],
      awards: [
        {name: '国家励志奖学金',content: '在校期间获国家励志奖学金'},
        {name: '学期二等奖',content: '在校期间获学校二等奖'}
      ],
      contacts: [
        {contact: 'phone',content: '15513571357'},
        {contact: 'qq',content: '584513000'}
      ]
    }
  },

  mutations: {
    ininState(state,payload){
      Object.assign(state,payload)
    },
    switchTab(state,payload){
      state.selected = payload
      localStorage.setItem('state',JSON.stringify(state))
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value)
      localStorage.setItem('state',JSON.stringify(state))
    }
  }
})
