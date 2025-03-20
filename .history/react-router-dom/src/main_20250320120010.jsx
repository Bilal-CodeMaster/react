import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Params from './components/Prams/Params.jsx'
import Github, { GithubData } from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//        {
//         path:'about',
//         element:<About/>
//       },
//        {
//         path:'contact',
//         element:<Contact/>
//       },
//        {
//         path:':id',
//         element:<Params/>
//       }
//       ,
//        {
//         path:'github',
//         element:<Github/>,
//     loader: GithubData 

//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  crealelem
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
