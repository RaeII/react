import React from "react";
import "./app.css"
import BottomNavigation from './components/navigation/BottomNavigation'
import AppBar from './components/appBar/AppBar'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Home from "./routes/home"
import Alerts from "./routes/alerts"
import List from "./routes/list"
import NotFound from "./routes/notFound"
const App = () => {
  const [btnNav, setState] =  React.useState(0)

  function setValeuBtnNav(value) {
    setState(value)
  }

  const Main = () => {

    return(
      <>
        <AppBar />
        <Outlet />
        <BottomNavigation btnValue={btnNav}/>
      </>

    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main />,
      errorElement:<NotFound />,
      children:[
        {
          path:'/',
          element:<Home setValueBtn={setValeuBtnNav}/>
        },
        {
          path:'alerts',
          element:<Alerts setValueBtn={setValeuBtnNav}/>
        },
        {
          path:'list',
          element:<List setValueBtn={setValeuBtnNav}/>
        }
      ]
    }
  ])
  


  return(
    <RouterProvider router={router} />
  )
}

export default App