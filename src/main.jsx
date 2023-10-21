import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Add from './pages/Add/Add.jsx';
import Update from './pages/Update/Update.jsx';
import Singin from './pages/Singin/Singin.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/add',
        element:<Add></Add>
      },
      {
        path:'/update',
        element:<Update></Update>
      },
    {
      path:'/singin',
      element:<Singin></Singin>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
