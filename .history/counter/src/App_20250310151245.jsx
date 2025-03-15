
import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import PropsHandling from './PropsHandling'
import ThemeBar from './ThemeBar'

function App() {
const hashtags=["#working","#nature","#travel","#trip"]
   const [color, setColor] = useState("");

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };
  return (
    <>
    <div className='w-full h-screen bg-amber-300 flex justify-center items-center flex-col gap-1'
    style={{backgroundColor:color}}
    >
      <div className='fixed left-  flex flex-wrap flex-col justify-center bg-white w-40 p-3 rounded-4xl'>
      <ThemeBar sendColor={handleColorChange}/>
      </div>
   <Counter/>
   <PropsHandling title="Nature Pic" description="its cool to have this type of view " hashtags={hashtags} />
   </div>
    </>
  )
}

export default App
