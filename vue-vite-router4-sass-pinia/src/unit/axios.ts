/**
 * @module axios配置
 */
import axios from "axios";
import { message } from "ant-design-vue";

// 前缀
const myAxios = axios.create({});
// 超时时间设置
myAxios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = '/api'
// axios请求拦截
myAxios.interceptors.request.use((conf: any) => {
  // api 处理
  message.loading("加载中...", 0);
  return conf;
});

// axios返回拦截
myAxios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      // pathname
      // origin
      message.destroy();
      const data = response.data ? response.data : response;

      return Promise.resolve(data);
    } else {
      message.destroy();
      return Promise.reject(response);
    }
  },
  (error) => {
    message.destroy();
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          message.error("错误请求！");
          break;
        case 401:
          message.error("未授权请求重新登陆！");
          break;
        case 403:
          message.error("拒绝访问！");
          break;
        case 404:
          message.error("请求错误，未找到该资源！");
          break;
        case 405:
          message.error("请求方法未允许");
          break;
        case 408:
          message.error("错误请求！");
          break;
        case 500:
          message.error("服务端出错！");
          break;
        case 501:
          message.error("网络未实现！");
          break;
        case 502:
          message.error("网络错误！");
          break;
        case 503:
          message.error("服务不可用！");
          break;
        case 504:
          message.error("网络超时！");
          break;
        case 505:
          message.error("http版本不支持该请求！");
          break;
      }
      return Promise.reject(error.response.status);
    }
  }
);

export default myAxios;
