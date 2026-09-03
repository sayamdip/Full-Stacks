import { useEffect, useState } from 'react'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lighttheme = () => {
    setThemeMode("light")
  }
  const darktheme = () => {
    setThemeMode("dark")
  }

  // Actual Theme Change

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
  <ThemeProvider value={{themeMode, lighttheme, darktheme}}>
      
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme Button */}
              <ThemeBtn />

          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>

          </div>
        </div>
    </div>

  </ThemeProvider>
  )
}

export default App
