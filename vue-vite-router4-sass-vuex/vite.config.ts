/*
 * @Author: branton
 * @Date: 2021-11-27 18:31:05
 * @LastEditors: branton
 * @LastEditTime: 2021-11-28 19:15:46
 * @Description: 修改文件
 * @FilePath: \qingjiao\admin\admin\vite.config.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import path from 'path'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 打包路径
  resolve: {
    // 项目引用缩写
    alias: {
      '@': path.resolve(__dirname, '.', 'src/'),
    },
  },
  css: {
    // 全局css
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/rest.scss";`,
        charset: false, // warning: "@charset" must be the first rule in the file
      },
    },
  },
  chainWebpack: (config: any) => {
    // 打包文件带hash
    // 配置cdn引入
    config.output
      .filename('assets/js/[name].[hash].js')
      .chunkFilename('assets/js/[name].[hash].js')
      .end()
  },
  plugins: [
    // vant按需加载
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
  build: {
    // 打包名称
    outDir: 'admin',
  },
  server: {
    port: 4000,
    open: false,
    proxy: {
      '/api/mobile': {
        // target: loadEnv(mode, process.cwd()).VITE_SERVE_URL,
        target: 'http://www.baidu.com/vue3-ts-demo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
