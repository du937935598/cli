/*
 * @Author: branton
 * @Date: 2021-11-24 18:27:18
 * @LastEditors: branton
 * @LastEditTime: 2022-01-19 15:27:08
 * @Description: 修改文件
 * @FilePath: \brantone:\qingjiao\admin\admin\src\interface\route-interface.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */

export interface addRouteInterface {
  path: string
  name: string
  title: string
  component: string
  children?: addRouteInterface[]
}
