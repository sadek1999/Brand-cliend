
import { useContext, useEffect, useState } from 'react';
import Navbar from '../share/navbar/Navbar';
import { authContext } from '../share/Auth/AuthProvider';
import Card from './card';
import axios from 'axios';


const Mycard = () => {
    const { user } = useContext(authContext)
    const [orders, setorders] = useState(null);
    const [myorders, setmyorders] = useState(null)
    // // const a=user.products[0];



    const handldelet=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:5001/order/${id}`)
        .then(res=>{
            console.log(res.data)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:5001/order?email=${user?.email}`)
            .then(res => {
                // console.log(res.data[1].product)
                setorders(res.data)
            })

    }, [user?.email])



   
    console.log(orders)
    return (
        <div>
            <Navbar></Navbar>
            <h1>total products ={orders?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>price</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <tr key={order._id}>
                            <th>
                                <p>{index + 1}</p>
                            </th>
                            <td>


                                <div>
                                    <div className="font-bold w-36">{order.product.name}</div>

                                </div>

                            </td>
                            <td>
                                <p>{order.product.brand}</p>
                            </td>
                            <td>{order.product.price}</td>
                            <th>
                                <button onClick={()=>{handldelet(order._id)}} className="btn bg-red-400 btn-xs">details</button>
                            </th>
                        </tr>
                        )}





                    </tbody>



                </table>
            </div>


        </div>
    );
};

export default Mycard;