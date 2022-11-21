import './index.scss'
import { shallowEqual } from "react-redux";
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { add, minus, change, back } from "../../store/userInfo";
import { envInfo } from '../../unit/tool';

function Login() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { count, text } = useAppSelector((state: any) => ({ ...state.userInfo }), shallowEqual);
  const dispatch = useAppDispatch();
  return <div className='login'>
    <div className='name'>store：count-{count}</div>
    <div className='desc'>store：text-{text}</div>
    <p className='desc'>unit：{envInfo().baseUrl}</p>
    <Button type="primary" onClick={() => dispatch(add())}>点击数字+1</Button>
    <Button type="primary" onClick={() => dispatch(minus())}>点击数字-1</Button>
    <Button type="primary" onClick={() => dispatch(change())}>点击改变文本</Button>
    <Button type="primary" onClick={() => dispatch(back())}>点击还原文本</Button>
  </div>
}

export default Login;