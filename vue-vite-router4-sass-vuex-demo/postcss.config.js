/*
 * @Author: branton
 * @Date: 2021-11-23 11:05:11
 * @LastEditors: branton
 * @LastEditTime: 2021-11-23 15:41:31
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\postcss.config.js
 */
// 最新写法
module.exports = {
    "plugins": {
        // to edit target browsers: use "browserslist" field in package.json
        "postcss-px2rem-exclude": {  // 添加的代码
          remUnit: 37.5,
          selectorBlackList: ['.norem'],
          exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件
        }
    }
}