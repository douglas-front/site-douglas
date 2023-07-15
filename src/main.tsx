import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Projects from './pages/Projects/index.tsx'
import Error from './pages/Error/index.tsx'
import Contact from './pages/Contact/index.tsx'

const home =  "/site-douglas"
const projects =  "/site-douglas/projetos"
const contact =  "/site-douglas/contato"

const router = createBrowserRouter([
  {
    path: home,
    element: <App/>,
    errorElement: <Error/>,
  },
  {
    path: projects,
    element: <Projects/>,
    errorElement: <Error/>,
  },
  {
    path: contact,
    element: <Contact/>,
    errorElement: <Error/>,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
