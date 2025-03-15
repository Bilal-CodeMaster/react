
import './App.css'
import Counter from './Counter'
import PropsHandling from './PropsHandling'

function App() {
const hashtags=["#working","#nature","#travel","#trip"]
 
  return (
    <>
    <div className='w-full h-screen bg-amber-500 flex justify-center items-center flex-col gap-1'>
   <Counter/>
   <PropsHandling title="Nature Pic" description="its cool to have this type of view " hashtags={hashtags} />
   </div>
    </>
  )
}

export default App
