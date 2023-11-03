import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import routes from './router'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()
  /** 事件处理函数 */
  function clickHandle() {
    dispatch(changeMessageAction('哈哈哈哈'))
  }
  return (
    <div className="App">
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>

      <h2>当前计数：{count}</h2>
      <h2>message: {message}</h2>
      <button onClick={clickHandle}>点击改变message</button>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
