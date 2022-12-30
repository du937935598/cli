/*
 * @Date: 2022-12-29 09:50:13
 * @LastEditTime: 2022-12-29 10:28:28
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-vue1\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router'

createApp(App).use(router).mount('#app')
