/*
 * @Author: branton
 * @Date: 2021-11-27 18:39:25
 * @LastEditors: branton
 * @LastEditTime: 2021-11-28 19:09:13
 * @Description: 修改文件
 * @FilePath: \qingjiao\admin\admin\src\store\index.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    login: false,
  },
  getters: {
    demosGetter(state) {
      return state.login
    },
  },
  mutations: {
    logins(state, val) {
      state.login = val
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
})
