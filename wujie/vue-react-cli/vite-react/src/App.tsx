/*
 * @Date: 2022-12-29 09:49:48
 * @LastEditTime: 2022-12-29 10:38:37
 * @FilePath: \zeissc:\branton\study\wujie\vue-react-cli\vite-react\src\App.tsx
 */
import { ReactElement, Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React from 'react'

const Admin = React.lazy(() => import('./pages/admin'))
const Login = React.lazy(() => import('./pages/login'))
const Error = React.lazy(() => import('./pages/error'))

function App() {
  const [count, setCount] = useState(0)
  // 页面重定向
  const Redirect = ({ to }: { to: string }): ReactElement | null => {
    const navigate = useNavigate()
    useEffect(() => {
      navigate(to)
    })
    return null
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Redirect to='/admin' />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
