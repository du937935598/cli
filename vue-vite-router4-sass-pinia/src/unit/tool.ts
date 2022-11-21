const helper: any = {};
/**
 * 当前项目的工具类
 */
helper.cal = (val: number, num: number) => {
  return val * num;
};
/**
 * 递归获取菜单的id值
 */
helper.getRoute = (data: any, lookup: string) => {
  let obj: any;
  let parentName: any;
  const recursion = (data: any, lookup: string) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].children) {
        recursion(data[i].children, lookup);
      } else {
        if (data[i].path === lookup) {
          obj = data[i];
          return;
        }
      }
    }
  };
  recursion(data, lookup);
  parentName =
    obj.id.split("-").length === 1
      ? ""
      : data.filter((val: any) => val.id == obj.id.split("-")[0])[0].name;
  obj.parentName = parentName;
  return obj;
};

export default helper;
