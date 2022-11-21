/*
 * @Date: 2022-11-16 11:25:30
 * @LastEditTime: 2022-11-18 11:06:37
 * @FilePath: \Frontendc:\branton\zeiss\IDSP4SMS-frontend\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store, persist } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}></PersistGate>
      <App />
    </Provider>
  </React.StrictMode>
)
