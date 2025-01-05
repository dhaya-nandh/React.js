import React, { useReducer,useState } from 'react'
import'./App.css'
const ACTION={
  ADD:"add",
  SUB:"sub",
  MUL:"mul",
  DIV:"div"
}
function calc(state,{type,payload:{input1,input2}}){

  switch(type)
  {
    case ACTION.ADD:
     return {result:parseFloat(input1)+parseFloat(input2)}
    case ACTION.SUB:
     return {result:parseFloat(input1)-parseFloat(input2)}
    case ACTION.MUL:
     return {result:parseFloat(input1)*parseFloat(input2)}
    case ACTION.DIV:
     return {result:parseFloat(input1)/parseFloat(input2)}
     default:
      return state
  }
}
const App = () => {
  const[{result},dispacth]=useReducer(calc,{result:0})
  const[input1,setinput1]=useState('')
  const [input2,setinput2]=useState('')

  const handleadd=()=>{
    dispacth({type:ACTION.ADD,payload:{input1,input2}})
  }
  const handlesub=()=>{
    dispacth({type:ACTION.SUB,payload:{input1,input2}})
  }
  const handlemul=()=>{
    dispacth({type:ACTION.MUL,payload:{input1,input2}})
  }
  const handlediv=()=>{
    dispacth({type:ACTION.DIV,payload:{input1,input2}})
  }

  
  return (
    <div>
      <input type="number" 
       value={input1} 
       className="input1"
       onChange={(e)=>setinput1(e.target.value)}/>
      <input type="number" 
      value={input2} 
      className="input2" 
      onChange={(e)=>setinput2(e.target.value)}/>
      <h1>{result}</h1>
      <button onClick={handleadd}>Add</button>
      <button onClick={handlesub}>Sub</button>
      <button onClick={handlemul}>Mul</button>
      <button onClick={handlediv}>Div</button>
    </div>
  )
}

export default App