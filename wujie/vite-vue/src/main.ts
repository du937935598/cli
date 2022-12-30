/*
 * @Date: 2022-12-29 09:48:27
 * @LastEditTime: 2022-12-29 11:21:05
 * @FilePath: \zeissc:\branton\study\wujie\vite-vue\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import WujieVue from "wujie-vue3";
import lifecycles from "./lifecycle";
import hostMap from "./hostMap";

const app = createApp(App)

const { setupApp, preloadApp, bus } = WujieVue;
const isProduction = process.env.NODE_ENV === "production";
app.use(WujieVue).use(router)
bus.$on("click", (msg) => window.alert(msg));

// 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
bus.$on("sub-route-change", (name, path) => {
    const mainName = `${name}-sub`;
    const mainPath = `/${name}-sub${path}`;
    const currentName = router.currentRoute.name;
    const currentPath = router.currentRoute.path;
    if (mainName === currentName && mainPath !== currentPath) {
        router.push({ path: mainPath });
    }
});

const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;
const props = {
  jump: (name) => {
    router.push({ name });
  },
};

/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
const attrs = isProduction ? { src: hostMap("//localhost:5173/") } : {};

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */
setupApp({
    name: "vite-vue",
    url: hostMap("//localhost:7000/"),
    attrs,
    exec: true,
    props,
    degrade,
    ...lifecycles,
});
setupApp({
    name: "vite-vue1",
    url: hostMap("//localhost:7100/"),
    attrs,
    exec: true,
    alive: true,
    props,
    degrade,
    ...lifecycles,
});
setupApp({
    name: "vite-react",
    url: hostMap("//localhost:7200/"),
    attrs,
    exec: true,
    props,
    degrade,
    ...lifecycles,
});
setupApp({
    name: "vite-react1",
    url: hostMap("//localhost:7300/"),
    attrs,
    exec: true,
    alive: true,
    props,
    // 引入了的第三方样式不需要添加credentials
    degrade,
    ...lifecycles,
});

if (window.localStorage.getItem("preload") !== "false") {
    preloadApp({
        name: "vite-vue"
    });
    preloadApp({
        name: "vite-vue1"
    });
    preloadApp({
        name: "vite-react"
    });
    preloadApp({
        name: "vite-react1"
    });
    // if (window.Proxy) {
    //     preloadApp({
    //         name: "vue3"
    //     });
    //     preloadApp({
    //         name: "vite",
    //         url: ''
    //     });
    // }
}

app.mount('#app')