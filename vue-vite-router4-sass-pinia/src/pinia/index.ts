import useUserStore from "./user";
import listUserStore from "./list";

// 统一导出useStore方法
export default function useStore() {
  return {
    user: useUserStore(),
    counter: listUserStore(),
  };
}
