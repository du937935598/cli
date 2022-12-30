/*
 * @Date: 2022-12-29 09:50:13
 * @LastEditTime: 2022-12-29 10:20:09
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router'

createApp(App).use(router).mount('#app')
