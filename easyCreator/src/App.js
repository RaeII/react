import React from "react";
import "./app.css"
import BottomNavigation from './components/navigation/BottomNavigation'
import AppBar from './components/appBar/AppBar'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Home from "./routes/home"
import Alerts from "./routes/alerts"
import List from "./routes/list"
import NotFound from "./routes/notFound"

const Main = () => {

  return(
    <>
      <AppBar />
      <Outlet />
      <BottomNavigation />
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
        element:<Home />
      },
      {
        path:'alerts',
        element:<Alerts />
      },
      {
        path:'list',
        element:<List />
      }
    ]
  }
])
 
const App = () => {

  return(
    <RouterProvider router={router} />
  )
}

export default App