import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { addRouteInterface } from "../interface/route-interface";
import { menuList } from "./../assets/mock";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      auth: true,
    },
    component: () => import("@/views/Home.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          title: "欢迎页",
        },
        component: () => import("@/views/index/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: {
      auth: false,
      title: "登录",
    },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      auth: false,
      title: "没找到页面",
    },
    component: () => import("@/views/404.vue"),
  },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

// mock数据
const arr: Array<addRouteInterface> = menuList;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 动态路由
const addRouter = (list: Array<addRouteInterface>) => {
  const _modules = import.meta.glob("./../views/**/*.vue");
  list.forEach((val: any) => {
    console.log(_modules, "_modules");
    console.log(`../views${val.component}`);
    routes[0].children?.push({
      path: val.path,
      name: val.name,
      meta: {
        auth: true,
        title: val.title,
      },
      component: _modules[`../views${val.component}`],
    });
  });
  let allRoute: any = routes;
  console.log(allRoute, "allRoute");
  allRoute.forEach((element: any) => {
    router.addRoute(element);
  });
};

addRouter(arr);

export default router;
