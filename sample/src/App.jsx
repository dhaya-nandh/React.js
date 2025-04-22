import React from 'react'
import {useState} from 'react'
import './App.css'
export const App=()=>{
  let [num,setNum]=useState(1);
  const handleadd=()=>{
   setNum((currValue)=>{
    return currValue*2
   });
  }
  return(
    <div>
    <h1>{num}</h1>
    <button onClick={handleadd}>add</button>
    </div>
  )
}
export default App