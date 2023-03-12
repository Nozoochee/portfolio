import { useState, useEffect } from "react"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

type Props = {}

function ThemeButton({}: Props) {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

  //see https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection 
  useEffect(() => {
    localStorage.theme = darkMode ? "dark" : "light";

    if(localStorage.theme === "dark"){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])
  
  const toggleMode = () => {setDarkMode((darkMode)=>!darkMode)}

  return (
  <button onClick={toggleMode} className="bg-slate-600 p-2 rounded-full"> 
    {darkMode ? <BsFillMoonFill/> : <BsFillSunFill/>} 
  </button>
  )
}

export default ThemeButton