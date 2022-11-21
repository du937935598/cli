/*
 * @Author: branton
 * @Date: 2021-11-23 16:08:20
 * @LastEditors: branton
 * @LastEditTime: 2021-11-26 15:23:56
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\router\index.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@views/About.vue")
  }
]

const arr = [{
  name: "produce",
  component: 'Produce'
},{
  name: "news",
  component: 'News'
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 动态路由
const addRouter = (list: any) => {
  const modules = import.meta.glob("./../views/**.vue");
  list.map((val: any) => {
    router.addRoute({
      path: `/${val.name}`,
      name: val.name,
      component: modules[/* @vite-ignore */ `./../views/${val.component}.vue`],
    })
  })
}

addRouter(arr)

export default router