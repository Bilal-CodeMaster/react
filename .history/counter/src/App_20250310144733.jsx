
import './App.css'
import Counter from './Counter'
import PropsHandling from './PropsHandling'

function App() {
const hashtags=["#working","#nature","#travel","#trip"]
 
  return (
    <>
   <Counter/>
   <PropsHandling title description="its cool to have this type of view " hashtags={hashtags} />
    </>
  )
}

export default App
