
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Root from './Root'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        }

      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

/* 
The useNavigate() hook can help trigger a navigation event from within a component.
 In other words, the useNavigate() hook allows you to programmatically navigate to a different URL within a functional component.

*/