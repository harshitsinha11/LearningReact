import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Batman from './component/Batman'

function App() {

  const [text,setText] = useState('Day')
  const [theme,setTheme] = useState("light")

  const lightTheme = () => setTheme("light")
  const darkTheme = () => setTheme("dark")

  useEffect(() => {
  const htmlClassList = document.querySelector('html')?.classList;
  htmlClassList?.remove('dark', 'light');
  htmlClassList?.add(theme);
  setText(theme == 'dark' ? 'Night' : 'Day')
}, [theme]);


  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <div className='w-full h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-col gap-3'>
        <Batman/>
        <button className='w-20 h-10 text-center rounded-lg bg-gray-800 text-gray-100 shadow-2xl dark:bg-gray-600 dark:text-gray-300'
        onClick={()=>{
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }}>{text}</button>
        
      </div>
    </ThemeProvider>
  )
}

export default App
