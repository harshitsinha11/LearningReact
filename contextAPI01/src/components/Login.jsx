import React, { useState } from 'react'
import { useContext } from 'react'
import userContext from '../context/UserContext'

function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div className='flex flex-col items-center justify-center bg-gray-600/50 rounded-lg h-35 w-70'>
            <h1 className='text-zinc-300'>Login page</h1>
            <input type="text" placeholder='username' 
            className='bg-amber-50 outline-none mx-3 my-1 py-0.5 px-1 w-60 rounded-lg'
            value={username}
            onChange={(e)=>setUsername(e.target.value)} />
            <input type="text" placeholder='password'
            className='bg-amber-50 outline-none mx-3 my-1 py-0.5 px-1 w-60 rounded-lg'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}
            className='bg-blue-500 text-gray-200 outline-none mx-3 my-1 py-0.5 px-1 w-30 rounded-lg'>Submit</button>
        </div>
    )
}

export default Login
