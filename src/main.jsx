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

import Details from './pages/Home/Details.jsx';
import Error from './share/Error/Error.jsx';
import Singin from './pages/Users/Singin.jsx';
import Singup from './pages/Users/Singup.jsx';
import Hp from './pages/Home/Brands/Hp.jsx';
import Dell from './pages/Home/Brands/Dell.jsx';
import Lanavo from './pages/Home/Brands/Lanavo.jsx';
import Asus from './pages/Home/Brands/Asus.jsx';
import Mic from './pages/Home/Brands/Mic.jsx';
import AuthPro from './share/Auth/AuthPro.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: '/singin',
        element: <Singin></Singin>
      },
      {
        path:'/singup',
        element:<Singup></Singup>
      },
      
      {
        path: '/add',
        element: <Add></Add>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://automotive-server-amber.vercel.app/products/${params.id}`)
      },
      {
        path: '/product/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5001/products/${params.id}`)
      },{
        path:'/hp',
        element:<Hp></Hp>

      }
      ,{
        path:'/dell',
        element:<Dell></Dell>
      },{
        path:'/lenovo',
        element:<Lanavo></Lanavo>,
      }
      ,{
        path:"/asus",
        element:<Asus></Asus>,
      }
      ,{
        path:"/microsoft",
        element:<Mic></Mic>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthPro> <RouterProvider router={router} /></AuthPro>
    
  </React.StrictMode>,
)
