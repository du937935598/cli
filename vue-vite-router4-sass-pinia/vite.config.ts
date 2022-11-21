import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import {
  AntDesignVueResolver,
  ElementPlusResolver,
} from "unplugin-vue-components/resolvers";
import path from "path";
console.log(path.resolve(__dirname, "./src"), '9')
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: "./", // 打包路径
    envPrefix: ["VITE_", "DZ_"],
    define: {
      __APP_ENV__: env,
    },
    // 项目引用缩写
    chainWebpack: config => {
      config.resolve.alias.set('@', path.join(__dirname, './src'))
    },
    css: {
      // 全局css
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/rest.scss";`,
        },
      },
    },
    build: {
      // 打包名称
      outDir: "vite-router4-sass-pinia-antd-cli",
      // 打包文件带hash
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/[name].[hash].js`,
          chunkFileNames: `assets/js/[name].[hash].js`,
          assetFileNames: `assets/js/[name].[hash].js`,
        },
      },
    },
    plugins: [
      // vant按需加载
      vue(),
      Components({
        resolvers: [
          ElementPlusResolver(),
          AntDesignVueResolver({
            // 参数配置可参考：https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/antdv.ts
            // 自动引入 ant-design/icons-vue中的图标，需要安装@ant-design/icons-vue
            resolveIcons: true,
          }),
        ],
      }),
    ],
    server: {
      port: 8080,
      strictPort: true,
    },
  };
});
