import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'111',
    roles:[], //用户角色
    tagsList:[],//打开的标签页个数,
    iisCollapse:false,
    breadList:[] //面包屑功能
  },
  //只有通过他才能使之state
  mutations: {
    COMMIT_ROLE(state,roles){
      state.roles = roles
    }
  },
  actions: {
  },
  modules: {
  }
})
