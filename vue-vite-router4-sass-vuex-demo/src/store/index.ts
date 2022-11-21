/*
 * @Author: branton
 * @Date: 2021-11-22 16:54:40
 * @LastEditors: branton
 * @LastEditTime: 2021-11-24 17:54:49
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\store\index.ts
 */
import { createStore } from "vuex"

export default createStore({
  state: {
    demo: ""
  },
  getters: {
    demosGetter(state) {
      return state.demo
    }
  },
  mutations: {
    demos(state, val) {
      state.demo = val
    }
  },
  actions: {},
  modules: {}
})
