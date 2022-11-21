import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Admin = React.lazy(() => import('./views/admin'));
const Login = React.lazy(() => import("./views/login"));
const Error = React.lazy(() => import("./views/notFound"));

// 页面重定向
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Redirect({ to }: any) {
  const navigate = useNavigate();
  console.log('to: ', to)
  useEffect(() => {
    navigate(to);
  });
  return null;
}

function App() {
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
