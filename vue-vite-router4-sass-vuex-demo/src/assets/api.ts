/*
 * @Author: branton
 * @Date: 2021-11-16 09:53:42
 * @LastEditors: branton
 * @LastEditTime: 2021-11-24 17:55:57
 * @Description: 修改文件
 * @FilePath: \qingjiaoe:\branton\study\vite-demo1\src\assets\api.ts
 */
import myAxios from "./axios"

/**
 * POSTdemo
 */
const postDemo = (currency: string) => {
  const data = {
    currency
  }
  return myAxios({
    url: `/api/deal/detail`,
    method: "post",
    data
  })
}

const getDemo = (currency: string) => {
  const data = {
    currency
  }
  return myAxios({
    url: `/api/deal/detail`,
    method: "post",
    params: data
  })
}

export { postDemo, getDemo }
