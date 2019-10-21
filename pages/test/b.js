import React, { useState, useReducer, useEffect, useLayoutEffect, useContext, useRef } from 'react'
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

const Example = () => {
  const [count, setCount] = useState(0)

  const [count1, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('aaron')

  const context = useContext(MyContext)

  const input = useRef()

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
      <Button onClick={() => dispatchCount({type: 'add'})}>CLICK 2</Button>
      <input ref={input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{context}</p>
    </div>
  )
}


export default Example;