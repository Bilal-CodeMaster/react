
import './App.css'
import Counter from './Counter'
import PropsHandling from './PropsHandling'
import ThemeBar from './ThemeBar'

function App() {
const hashtags=["#working","#nature","#travel","#trip"]
 
  return (
    <>
    <div className='w-full h-screen bg-amber-500 flex justify-center items-center flex-col gap-1'>
      <div className='fixed left-0  flex flex-wrap flex-col justify-center bg-white w-40 p-3 rounded-4xl'>
      <ThemeBar sendColor={handleColorChange}/>
      </div>
   <Counter/>
   <PropsHandling title="Nature Pic" description="its cool to have this type of view " hashtags={hashtags} />
   </div>
    </>
  )
}

export default App
