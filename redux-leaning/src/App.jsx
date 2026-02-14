import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { increment,decrement } from '../redux/counterSlice'
import { useSelector,useDispatch } from 'react-redux'

function App() {

  const count=useSelector((state)=>state.counter.value);

  const dispatch=useDispatch();

  return (
    <>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
