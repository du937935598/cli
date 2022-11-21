/*
 * @Author: branton
 * @Date: 2021-11-25 16:36:46
 * @LastEditors: branton
 * @LastEditTime: 2021-11-26 10:34:23
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\directive\hasPermission.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
export default (Vue: any) => {
    /**自定义按钮权限指令 */
    Vue.directive('has', {
        mounted(el:any, binding:any) {
            //获取按钮权限
            if (!Vue.config.globalProperties.$_has(binding.value)) {
                //移除不匹配的按钮
                el.parentNode && el.parentNode.removeChild(el)
            }
        },
    })

    //检查权限方法
    Vue.config.globalProperties.$_has = (value: any) => {
        let isExist = false
        var btnPermsArr = ['user:add', 'user:edit', 'user:del'] //获取从服务器请求存储本地的按钮权限
        if (btnPermsArr.includes(value)) {
            isExist = true
        }
        return isExist
    }
}