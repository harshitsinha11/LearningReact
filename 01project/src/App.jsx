import { useState } from "react"

function App() {
  const [color , setColor] = useState("black");
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >

      <div className="fixed flex flex-wrap justify-center px-2 inset-x-0 bottom-12" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={()=> setColor("red")}
            className="rounded-xl px-4 py-1 outline-none cursor-pointer text-white shadow-lg"
            style = {{backgroundColor : "red"}}
          >RED</button>
          <button
            onClick={()=> setColor("blue")}
            className="rounded-xl px-4 py-1 outline-none cursor-pointer text-white shadow-lg"
            style = {{backgroundColor : "blue"}}
          >BLUE</button>
          <button
            onClick={()=> setColor("orange")}
            className="rounded-xl px-4 py-1 outline-none cursor-pointer text-white shadow-lg"
            style = {{backgroundColor : "orange"}}
          >ORANGE</button>
          <button
            onClick={()=> setColor("green")}
            className="rounded-xl px-4 py-1 outline-none cursor-pointer text-white shadow-lg"
            style = {{backgroundColor : "green"}}
          >GREEN</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
