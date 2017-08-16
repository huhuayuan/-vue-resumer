import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
      },
      'work history': [
        {company: 'AL',content: '我的第二份工作'},
        {company: 'XL',content: '我的第一份工作'}
      ],
      education: [
        {school: 'AL',content: '**学校'},
        {school: 'XL',content: '**学校'}
      ],
      projects: [
        {name: 'projectA',content: '文字'},
        {name: 'projectB',content: '文字'}
      ],
      awards: [
        {name: 'awardsA',content: '文字'},
        {name: 'awardsB',content: '文字'}
      ],
      contacts: [
        {contact: 'phone',content: '15513571357'},
        {contact: 'qq',content: '584513000'}
      ]
    }
  },

  mutations: {
    switchTab(state,payload){
      state.selected = payload
    }
  }
})
