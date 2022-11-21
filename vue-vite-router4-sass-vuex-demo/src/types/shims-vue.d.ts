/*
 * @Author: branton
 * @Date: 2021-11-22 16:10:19
 * @LastEditors: branton
 * @LastEditTime: 2021-11-24 18:37:48
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\shims-vue.d.ts
 */
declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
