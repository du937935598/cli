/*
 * @Date: 2022-12-29 10:06:39
 * @LastEditTime: 2022-12-29 10:25:05
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue\src\router\index.ts
 */
import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'home',
        component:() => import('../pages/home.vue')
    },
    {
        path:'/home',
        name: 'home',
        component:() => import('../pages/home.vue')
    },
    {
        path:'/vite-vue',
        name: 'viteVue',
        component:() => import('../pages/vite-vue.vue')
    },
    {
        path:'/vite-vue-sub/:path',
        name: 'vite-vue-sub',
        component:() => import('../pages/vite-vue-sub.vue')
    },
    {
        path:'/vite-vue1',
        component:() => import('../pages/vite-vue1.vue')
    },
    {
        path:'/vite-vue1-sub/:path',
        name: 'vite-vue1-sub',
        component:() => import('../pages/vite-vue1-sub.vue')
    },
    {
        path:'/vite-react',
        component:() => import('../pages/vite-react.vue')
    },
    {
        path:'/vite-react-sub/:path',
        name: 'vite-react-sub',
        component:() => import('../pages/vite-react-sub.vue')
    },
    {
        path:'/vite-react1',
        component:() => import('../pages/vite-react1.vue')
    },
    {
        path:'/vite-react1-sub/:path',
        name: 'vite-react1-sub',
        component:() => import('../pages/vite-react1-sub.vue')
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