import  { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setproducts]=useState([]);
   
    //
    return (
        <div>
            <h1>total data ={products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                   products.map(product=><Product key={product._id}
                     product={product}></Product>) 
                }
            </div>
        </div>
    );
};

export default Products;