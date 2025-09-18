import React, { useState } from 'react'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import bg from './assets/currency.jpg';
import InputBox from './component/InputBox';

function App() {

  const [to,setTo] = useState("inr")
  const [from,setFrom] = useState("usd")
  const [amt,setAmt] = useState(0)
  const [convertedAmt,setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setAmt(convertedAmt)
    setConvertedAmt(amt)
    setFrom(to)
    setTo(from)
  }

  const convert = () => setConvertedAmt(Number(amt) * currencyInfo[to])
  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center'
    style={{
      backgroundImage:`url(${bg})`,
    }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 backdrop-blur-sm bg-white/60 p-5 rounded-lg'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label={from}
              amount={amt}
              onAmtChange={(amt) => setAmt(amt)}
              onCurrChange={(curr) => setFrom(curr)}
              currOptions={options}
              selectCurr={from}/>
            </div>
            <div className='relative w-full h-0.5'>
              <button type='button' onClick={swap}
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 px-2 py-0.5 text-white'>
              swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label={to}
              amount={convertedAmt}
              onCurrChange={(curr) => setTo(curr)}
              currOptions={options}
              selectCurr={to}/>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
