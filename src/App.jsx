import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from './store'

const App = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const incHandler =()=>{
    //dispatch({type:'INC'})
    dispatch(actions.inc())
  }
  const decHandler =()=>{
    // dispatch({type:'DEC'})
    dispatch(actions.dec())
  }
  const resetHandler =()=>{
    // dispatch({type:'RESET'})
    dispatch(actions.reset())
  }
  const addEvenHandler =()=>{
    // dispatch({type:'ADD_EVEN', payload:2})
    dispatch(actions.add(2))
  }
  return (
    <div>
      <h1>Counter</h1><p>{counter}</p>
      <button onClick={incHandler}>+</button>
      <button onClick={decHandler}>-</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={addEvenHandler}>Add 2</button>
    </div>
  )
}

export default App