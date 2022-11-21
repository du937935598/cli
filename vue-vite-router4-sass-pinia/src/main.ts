import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
// 路由
import router from "./router";
// 状态管理
import useStore from "./pinia";
// 工具类
import helper from "./unit/tool";
// 自定义指令
// 按钮权限
import hasPermission from "./directive/hasPermission";
// 其他权限
import focus from "./directive/focus";
import Particles from "particles.vue3";
import piniaPluginPersist from "pinia-plugin-persist";

// 路由拦截
router.beforeEach((to: any, from: any, next: any) => {
  const token: boolean = useStore().user.login;
  if (!to.meta.auth || token) {
    next();
  } else {
    next({ path: "/login" });
  }
});

const app = createApp(App);
const pinia = createPinia();
app.use(Particles);
// 自定义指令
app.use(hasPermission).use(focus);
// 全局工具类
// -- 全局配置文件方式1
// 定义
// app.config.globalProperties.$tool = helper;
// 使用
// getCurrentInstance().appContext.config.globalProperties.$tool
// -- 全局配置文件方式2
// 定义
app.provide("$tool", helper);
// 使用
// inject("$tool")
pinia.use(piniaPluginPersist);
app.use(pinia).use(router).mount("#app");
// app.provide("$tool", helper);
