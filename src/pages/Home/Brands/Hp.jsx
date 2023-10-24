import { useEffect } from "react";
import { useState } from "react";
import Brand from "./Brand";
import Navbar from "../../../share/navbar/Navbar";


const Hp = () => {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5001/products/HP`)
        .then(res=>res.json())
        .then(data=>{
            setproducts(data);
        })
        
    },[]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/home/IMG-20231022-WA0004-982x500.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.startech.com.bd/image/cache/catalog/home/banner/bkash-durga-puja-home-banner-982x500.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://computermania-bd.b-cdn.net/wp-content/uploads/20.Lenovo-IdeaPad-Gaming-3-9k-discount.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                   products.map(product=><Brand key={Brand._id}
                     product={product}></Brand>) 
                }

            </div>

        </div>
    );
};

export default Hp;