import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '1212',
    roles: [], //用户角色
    tagsList: [], //打开的标签页个数,
    isCollapse: false,
    breadList: ["首页"] //面包屑功能
  },
  //只有通过他才能使之state
  mutations: {
    // 设置角色
    COMMIT_ROLE(state, roles) {
      state.roles = roles
    },
    // 设置token
    COMMIT_TOKEN(state, token) {
      state.token = token
    },
    // 设置面包屑
    SET_BREAD(state, breadList) {
      state.breadList = breadList
    },
    //设置侧导航的展示与隐藏
    IS_COLLAPSE(state, bool) {
      state.isCollapse = bool;
    },
    // 保存标签
    TAGES_LIST(state,arr){
      state.tagsList = arr
    }
  },
  actions: {},
  modules: {}
})