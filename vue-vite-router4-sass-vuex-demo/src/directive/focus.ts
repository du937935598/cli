/*
 * @Author: branton
 * @Date: 2021-11-26 10:27:32
 * @LastEditors: branton
 * @LastEditTime: 2021-11-26 14:46:27
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\directive\focus.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
import dayjs from 'dayjs'
export default (Vue: any) => {
    Vue.directive('focus', {
        mounted(el:any, binding:any) {
            el.focus()
        }
    })

    Vue.directive('format-time', {
        mounted(el:any, binding:any) {
            const time: number = el.textContent * 1;
            el.textContent = dayjs(time).format(binding.value)
        }
    })
}