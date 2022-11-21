/*
 * @Author: branton
 * @Date: 2021-11-16 10:19:56
 * @LastEditors: branton
 * @LastEditTime: 2021-11-24 17:56:05
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\assets\axios.ts
 */
/**
 * @module axios配置
 */
import axios from "axios"
import { Toast } from "vant"

// 前缀
const myAxios = axios.create({})
// 超时时间设置
myAxios.defaults.timeout = 10000
axios.defaults.withCredentials = true
// axios.defaults.baseURL = '/api'
// axios请求拦截
myAxios.interceptors.request.use(conf => {
  // api 处理
  Toast.loading({
    message: "加载中...",
    forbidClick: true
  })
  return conf
})

// axios返回拦截
myAxios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      // pathname
      // origin
      Toast.clear()
      const data = response.data ? response.data : response

      return Promise.resolve(data)
    } else {
      Toast.fail(response)
      return Promise.reject(response)
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          Toast.fail("错误请求！")
          break
        case 401:
          Toast.fail("未授权请求重新登陆！")
          break
        case 403:
          Toast.fail("拒绝访问！")
          break
        case 404:
          Toast.fail("请求错误，未找到该资源！")
          break
        case 405:
          Toast.fail("请求方法未允许")
          break
        case 408:
          Toast.fail("错误请求！")
          break
        case 500:
          Toast.fail("服务端出错！")
          break
        case 501:
          Toast.fail("网络未实现！")
          break
        case 502:
          Toast.fail("网络错误！")
          break
        case 503:
          Toast.fail("服务不可用！")
          break
        case 504:
          Toast.fail("网络超时！")
          break
        case 505:
          Toast.fail("http版本不支持该请求！")
          break
      }
      return Promise.reject(error.response.status)
    }
  }
)

export default myAxios
