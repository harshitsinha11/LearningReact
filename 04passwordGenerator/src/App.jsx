import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length,setlength] = useState(8);
  const [constainsNum,setContainsNum] = useState(false)
  const [constainsSign,setContainsSign]= useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';
    if(constainsNum) str += '1234567890';
    if(constainsSign) str += "!@#$%^&*(){}";
    for(let i=0;i<length;i++){
      let idx = Math.floor(Math.random()*str.length);
      pass += str.charAt(idx);
    }
    setPassword(pass);
  },[constainsSign,constainsNum,length,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[constainsNum,constainsSign,length,passwordGenerator])

  const copyToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='w-full max-w-md mx-auto my-8 shadow-gray-700 shadow-md rounded-xl px-5 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        className='outline-none w-full px-3 py-1 bg-gray-700'
        value={password}
        placeholder='Password'
        ref={passwordRef}
        readOnly/>
        <button 
        className='bg-amber-500 outline-none hover:scale-105 cursor-pointer hover:bg-amber-600 px-3 py-0.5 text-white'
        onClick={copyToClip}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" max={100} min={1} value={length} 
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          onChange={()=>{
            setContainsNum((prev)=>!prev)
          }} 
          defaultChecked={constainsNum}/>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          onChange={()=>{
            setContainsSign((prev)=>!prev)
          }} 
          defaultChecked={constainsSign}/>
          <label>Special Symbol</label>
        </div>
      </div>

    </div>
  )
}

export default App
