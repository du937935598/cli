// 搜索组件
interface searchListInterface {
  id: string;
  transactionType: string;
  uid: string;
  advertisingStatus: string;
  orderId: string;
  addTime: Date;
  number: [number, number];
  price: [number, number];
}
// table组件
interface tableDataTypeInterface {
  key: number;
  id: number;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

export type { tableDataTypeInterface, searchListInterface };
