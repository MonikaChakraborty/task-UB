import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Slider1 from './components/Slider1';
import Home from './components/Home';
import Slider2 from './components/Slider2';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
      {
        path: '/',
        element:<Home></Home>
      },

      {
        path: '/slider1',
        element:<Slider1></Slider1>
      },

      {
        path: '/slider2',
        element:<Slider2></Slider2>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
