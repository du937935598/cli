/*
 * @Author: branton
 * @Date: 2021-11-24 10:10:56
 * @LastEditors: branton
 * @LastEditTime: 2021-11-24 17:56:52
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended", //继承Eslint中推荐的（打钩的）规则项http://eslint.cn/docs/rules/
    "plugin:vue/essential" // 此项是用来配置vue.js风格
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    semi: [2, "never"]
  }
}
