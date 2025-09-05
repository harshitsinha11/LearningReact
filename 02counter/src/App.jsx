import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () =>{
    setCount(count+1);
    console.log(count);
  }

  const remValue = () =>{
    setCount(count-1);
    console.log(count);
    
  }

  return (
    <>
      <h1>This is a counter</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Inc(+) Value {count}</button>
      <button onClick={remValue}>Dec(-) Value {count}</button>
    </>
  )
}

export default App
