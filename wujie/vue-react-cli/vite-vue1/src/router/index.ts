/*
 * @Date: 2022-12-29 10:06:39
 * @LastEditTime: 2022-12-29 10:25:05
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue\src\router\index.ts
 */
import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        component:() => import('../pages/home.vue')
    },
    {
        path:'/home',
        component:() => import('../pages/home.vue')
    },
    {
        path:'/detail',
        component:() => import('../pages/detail.vue')
    },
    {
        // 定义404路由
        path:'/404',
        component:() => import('../pages/notfound.vue')
    },
    {
        // 匹配为定义路由然后重定向到404页面
        path:'/:pathMath(.*)',
        redirect:'/404'
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router