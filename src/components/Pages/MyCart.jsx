import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import ShowMyCarts from "./ShowMyCarts";
let chooseCarts=[];


const MyCart = () => {

    const allMyCarts = useLoaderData();
    const {userr} = useContext(AuthContext);
    
    if(userr){
    console.log(userr.email)
    chooseCarts = allMyCarts.filter(data => data.email==(userr.email));
    
    
}
     
    return (
        <>
        <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">All My Selected Carts</p>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                chooseCarts.map(show =><ShowMyCarts key={show._id} show={show}></ShowMyCarts> )
            }
        </div>
        </>
    );
};

export default MyCart;