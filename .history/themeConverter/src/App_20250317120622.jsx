import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"
import { ThemeContextProvider } from "./contexts/ThemeContext"

function App() {


  return (
   <ThemeContextProvider value={themeMode,}>
   
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

   </ThemeContextProvider>
  )
}

export default App
