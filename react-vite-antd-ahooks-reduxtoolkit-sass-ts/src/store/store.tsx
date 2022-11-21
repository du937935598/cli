import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stateUserInfo from "./slice";
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"

const reducer = combineReducers({
  userInfo: stateUserInfo
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  // 每个reducer代表一个模块的状态管理器
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: []
});

export const persist = persistStore(store)

// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof persist.getState>;

// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof persist.dispatch;