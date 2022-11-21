/*
 * @Author: branton
 * @Date: 2022-01-19 16:46:49
 * @LastEditors: Branton
 * @LastEditTime: 2022-01-24 14:28:25
 * @Description: 修改文件
 * @FilePath: \brantone:\qingjiao\admin\admin\src\interface\compontent-interface.ts
 * *****   永无BUG，代码封神！   *****   永无BUG，佛祖保佑！   *****
 */
// 搜索组件
export interface searchListInterface {
  id: string
  transactionType: string
  uid: string
  advertisingStatus: string
  orderId: string
  addTime: Date
  number: [number, number]
  price: [number, number]
}
// table组件 
interface tableDataTypeInterface {
  key: number;
  id: number
  name: string;
  chinese: number;
  math: number;
  english: number;
}