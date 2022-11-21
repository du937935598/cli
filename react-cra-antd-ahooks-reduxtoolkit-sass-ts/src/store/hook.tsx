import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "./index";

// use hook 节约每次引入type的工作
// useSelector: 节约配置RootState type

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;