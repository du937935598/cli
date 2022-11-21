/*
 * @Author: branton
 * @Date: 2021-11-23 16:08:20
 * @LastEditors: branton
 * @LastEditTime: 2022-01-19 16:37:34
 * @Description: 修改文件
 * @FilePath: \brantone:\qingjiao\admin\admin\src\router\index.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { addRouteInterface } from './../interface/route-interface'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '欢迎页',
        },
        component: () => import('@/views/index/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: false,
      title: '登录',
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      auth: false,
      title: '没找到页面',
    },
    component: () => import('@/views/404.vue'),
  },
  { path: '/:catchAll(.*)', redirect: '/404' },
]

// mock数据
const arr: Array<addRouteInterface> = [
  {
    path: '/member/list',
    name: 'member-list',
    title: '会员列表',
    component: '/views/member/list.vue',
  },
  {
    path: '/member/edit',
    name: 'member-edit',
    title: '会员列表',
    component: '/views/member/edit.vue',
  },
  {
    path: '/member/update',
    name: 'member-update',
    title: '会员列表',
    component: '/views/member/update.vue',
  },
  {
    path: '/authority/list',
    name: 'authority-list',
    title: '权限列表',
    component: '/views/authority/list.vue',
  },
  {
    path: '/authority/edit',
    name: 'authority-edit',
    title: '权限编辑',
    component: '/views/authority/edit.vue',
  },
  {
    path: '/authority/update',
    name: 'authority-update',
    title: '权限修改',
    component: '/views/authority/update.vue',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 动态路由
const addRouter = (list: Array<addRouteInterface>) => {
  const modules = import.meta.glob('./../views/**/*.vue')
  list.forEach((val: any) => {
    routes[0].children?.push({
      path: val.path,
      name: val.name,
      meta: {
        auth: true,
        title: val.title,
      },
      component: modules[`./..${val.component}`],
    })
  })
  let allRoute: any = routes
  allRoute.forEach((element: any) => {
    router.addRoute(element)
  })
}

addRouter(arr)

export default router
