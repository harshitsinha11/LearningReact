import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='bg-black w-full h-screen flex flex-col items-center justify-center gap-3 '>
        <h1 className='text-zinc-50'>Dummy Context API project</h1>
        <Login />
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
