


import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement:<Error></Error>,
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