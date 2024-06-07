import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Extention from './components/extention/Extention';
import Subscribe from './components/subscribe/Subscribe';



const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/extention",
        element:<Extention></Extention>
      },
      {
        path:"/subscribe",
        element:<Subscribe></Subscribe>
      }
   
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>,
)
