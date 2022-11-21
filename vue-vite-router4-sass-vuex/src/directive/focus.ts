/*
 * @Author: branton
 * @Date: 2021-11-26 10:27:32
 * @LastEditors: branton
 * @LastEditTime: 2021-11-27 19:20:43
 * @Description: 修改文件
 * @FilePath: \qingjiao\admin\admin\src\directive\focus.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
export default (Vue: any) => {
  Vue.directive('focus', {
    mounted(el: any, binding: any) {
      el.focus()
    },
  })

  Vue.directive('format-time', {
    mounted(el: any, binding: any) {
      const time: number = el.textContent * 1
      el.textContent = '123'
    },
  })
}
