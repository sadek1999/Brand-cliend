
import { useContext, useEffect, useState } from 'react';
import Navbar from '../share/navbar/Navbar';
import { authContext } from '../share/Auth/AuthProvider';
import Card from './card';

const Mycard = () => {
    const{user}=useContext(authContext)
    const [cards,setcards]=useState([]);
    // const a=user.products[0];

    useEffect(()=>{
        fetch(`https://automotive-server-amber.vercel.app/products/6533ef0ae83a8f08bc3e5f5d`)
        .then(res=>res.json())
        .then(data=>{
            setcards(data)
        })
    },[])
    useEffect(()=>{
        fetch(`https://automotive-server-amber.vercel.app/products/6533f068e83a8f08bc3e5f60`)
        .then(res=>res.json())
        .then(data=>{
            setcards(data)
        })
    },[])
    // console.log(cards)
    console.log(user.products[0])
   
    // user.products.map(product=>{
    //     useEffect(()=>{
    //         fetch(`https://automotive-server-amber.vercel.app/products/${product}`)
    //         .then(res=>res.json())
    //         .then(data=>{
    //            setcards(data);
    //         })
    //     },[])
    // }
        // )
    return (
        <div>
            <Navbar></Navbar>
            <h1>{user.products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    cards?.map(card=><Card key={card._id} card={card}></Card>)
                }
            </div>
           
            
        </div>
    );
};

export default Mycard;