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
import Users from './components/users/Users';
import UserDetails from './components/userDetails/UserDetails';
import Posts from './components/posts/Posts';
import PostDetails from './components/postDetails/PostDetails';



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
      },
      {
        path:"/users",

        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),

        element:<Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:"/posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
   
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
        <RouterProvider router={router} />
        </React.StrictMode>,
)
