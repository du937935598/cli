/*
 * @Author: branton
 * @Date: 2021-11-23 11:01:57
 * @LastEditors: branton
 * @LastEditTime: 2021-11-26 10:43:33
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\main.ts
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
import 'lib-flexible'

import { Button, Toast, Popup, Calendar, Field, Form, Loading, Row, Col } from 'vant'

const app = createApp(App)
// vant组件的使用
app.use(Button).use(Toast).use(Popup).use(Calendar).use(Field).use(Form).use(Loading).use(Row).use(Col)
// 自定义指令
app.use(hasPermission).use(focus)
app.use(store).use(router).mount('#app')
// 全局工具类
app.config.globalProperties.$tool = helper
