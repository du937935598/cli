import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";

// use hook 节约每次引入type的工作
// useSelector: 节约配置RootState type

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;