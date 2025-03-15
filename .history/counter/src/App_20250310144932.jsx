
import './App.css'
import Counter from './Counter'
import PropsHandling from './PropsHandling'

function App() {
const hashtags=["#working","#nature","#travel","#trip"]
 
  return (
    <>
    <div></div>
   <Counter/>
   <PropsHandling title="Nature Pic" description="its cool to have this type of view " hashtags={hashtags} />
    </>
  )
}

export default App
