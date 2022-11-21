/*
 * @Date: 2022-11-16 11:25:30
 * @LastEditTime: 2022-11-18 11:03:02
 * @FilePath: \Frontendc:\branton\zeiss\IDSP4SMS-frontend\vite.config.ts
 */
import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  // 打包路径
  return {
    base: './',
    envPrefix: ['VITE_', 'DZ_'],
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    //全局引入
    css: {
      preprocessorOptions: {
        scss: {
          /**如果引入多个文件，可以使用
           * '@import "@/assets/scss/globalVariable1.scss";
           * @import"@/assets/scss/globalVariable2.scss";'
           **/
          additionalData: '@import "@/assets/css/index.scss";'
        }
      }
    },
    build: {
      // 打包名称
      outDir: 'IDSP-SMS-BUILD',
      // 打包文件带hash
      rollupOptions: {
        output: {
          entryFileNames: `js/[name].[hash].js`,
          chunkFileNames: `js/[name].[hash].js`,
          assetFileNames: `js/[name].[hash].js`
        }
      }
    }
  }
})
