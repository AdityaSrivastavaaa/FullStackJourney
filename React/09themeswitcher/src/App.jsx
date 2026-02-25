import { useState } from "react";
import { ThemeProvider } from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { useEffect } from "react";

function App() {
  const [themMode,setThemeMode]=useState("light");
  
  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }
  //actual change in theme
  useEffect(()=>{
    if(themMode==="light"){
      document.documentElement.classList.remove("dark");
    }else{
      document.documentElement.classList.add("dark");
    }
  },[themMode])
  return (
    <ThemeProvider value={{themMode,lightTheme,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
             <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
