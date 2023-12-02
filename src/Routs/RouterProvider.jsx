


import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Home from '../pages/Home/Home'

import Singin from './../pages/Users/Singin';
import Error from './../share/Error/Error';
import Singup from './../pages/Users/Singup';
import Add from './../pages/Add/Add';
import Update from './../pages/Update/Update';
import Dell from './../pages/Home/Brands/Dell';
import Details from './../pages/Home/Details';
import Hp from './../pages/Home/Brands/Hp';
import Mic from './../pages/Home/Brands/Mic';
import Lanavo from './../pages/Home/Brands/Lanavo';
import Asus from './../pages/Home/Brands/Asus';
import Mycard from '../Mycard/Mycard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement:<Error></Error>,
      children: [
        {
          path: '/',
          element:<Home></Home>
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
          loader: ({ params }) => fetch(`https://automotive-server-amber.vercel.app/products/${params.id}`)
        },{
          path:'/mycard',
          element:<Mycard></Mycard>
        }
        
        
        ,{
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

  export default router;