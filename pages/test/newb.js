import React, { useState, useReducer, useEffect, memo, useMemo, useCallback } from 'react'
import { Button } from 'antd'

import MyContext from '../../lib/my-context'

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

const Child = memo(function Child({ onButtonClick, config }) {
  console.log('child render')
  return (
    <button onClick={onButtonClick} >
      {config.text}
    </button>
  )
}) // 添加memo表明如果该元素没变化则不渲染

// 在react hook中的所有方法每次渲染都是不同的 调用方法时使用的state是调用方法时的state

const Example = () => {
  const [count, setCount] = useState(0)

  const [count1, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('aaron')

  const config = useMemo(() => {
    text: `count is ${count}`,
    color: count > 3 ? 'red' : 'blue'
  }, [count]) // 设置useMemo以及第二个参数为相应state, 如果state不变则该对象不变
  
  const handleBtnClick = useCallback(() => dispatchCount({ type: 'add' }), [])
  // 👆
  const handleBtnClick = useMemo(() => () => dispatchCount({ type: 'add' }), []) // 功能跟上面一样, 上面的是简化版本


  useEffect(() => {
    console.log('effect')
    console.log(input)
    return () => console.log('effect removed')
  }, [])

  // uselayouteffect 会在dom渲染更新前调用 (比useEffect早)
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    return () => console.log('useLayoutEffect removed')
  }, [])

  return (
    <div>
      <p>You have clicked {count} times</p>
      <p>You have clicked {count1} times</p>
      <Button onClick={() => setCount(count + 1)}>CLICK</Button>
      <div>
      <Child
        config={config}
        onButtonClick={handleBtnClick}
        />
        <button onClick={onButtonClick} >
          {config.text}
        </button>
      </div>
    </div>
  )
}


export default Example;