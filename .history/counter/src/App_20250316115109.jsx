
import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import PropsHandling from './PropsHandling'
import ThemeBar from './ThemeBar'
import PasswordGenerator from './PasswordGenerator'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
const hashtags=["#working","#nature","#travel","#trip"]
const [color,setColor]=useState('gray')

const handleColor=(props)=>{
  setColor(props)
}
  return (
    <>
    <div className='w-full min-h-screen  flex justify-center items-center flex-col gap-1 '
    style={{backgroundColor:color}}
    >
      <div
       className='fixed left-3  flex flex-wrap flex-col top-56 bg-white w-40 p-3 rounded-4xl '
      
       >
      <ThemeBar sendColor={handleColor}/>
      </div>
   <Counter/>
   <PropsHandling title="Nature Pic" description="its cool to have this type of view " hashtags={hashtags} />

   <PasswordGenerator/>



   <CurrencyConverter/>
   </div>
    </>
  )
}

export default App
