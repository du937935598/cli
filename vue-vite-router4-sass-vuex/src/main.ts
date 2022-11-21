/*
 * @Author: branton
 * @Date: 2021-11-27 18:31:05
 * @LastEditors: Branton
 * @LastEditTime: 2022-01-25 10:21:47
 * @Description: 修改文件
 * @FilePath: \brantone:\qingjiao\admin\admin\src\main.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 状态管理
import store from './store'
// 工具类
import helper from './assets/tool'
// 自定义指令
// 按钮权限
import hasPermission from './directive/hasPermission'
// 其他权限
import focus from './directive/focus'

import 'ant-design-vue/dist/antd.css'

import Particles from 'particles.vue3'

// 路由拦截
router.beforeEach((to: any, from: any, next: any) => {
  const token: boolean = store.state.login
  if (!to.meta.auth) next()
  if (token) {
    next()
  } else {
    next({ path: '/login' })
  }
})

const app = createApp(App)
app.use(Particles)
// 自定义指令
app.use(hasPermission).use(focus)
app.use(store).use(router).mount('#app')
// 全局工具类
app.config.globalProperties.$tool = helper
