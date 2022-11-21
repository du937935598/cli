/*
 * @Author: branton
 * @Date: 2021-11-23 11:03:38
 * @LastEditors: branton
 * @LastEditTime: 2021-11-25 15:40:54
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\vite.config.ts
 */
// vite.config.js
import vue from "@vitejs/plugin-vue"
import styleImport from "vite-plugin-style-import"
import path from "path"

export default {
  base: "./", // 打包路径
  resolve: { // 项目引用缩写
    alias: {
      "@": path.resolve(__dirname, "src"),
      '@components': path.resolve(__dirname, "src/components"),
      '@types': path.resolve(__dirname, "src/types"),
      '@views': path.resolve(__dirname, "src/views"),
      '@interface': path.resolve(__dirname, "src/interface")
    }
  },
  css: { // 全局css
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/rest.scss";`
      }
    }
  },
  chainWebpack: config => { // 打包文件带hash
    // 配置cdn引入
    config.output.filename('assets/js/[name].[hash].js').chunkFilename('assets/js/[name].[hash].js').end()
  },
  plugins: [ // vant按需加载
    vue({ refTransform: [/src/] }),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style`
        }
      ]
    })
  ],
  build: { // 打包名称
    outDir: 'vite-router4-sass-vuex'
  },
  server: {
    port: 4000,
    open: false,
    proxy: {
      "/api/mobile": {
        target: "http://www.baidu.com/vue3-ts-demo",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
}
