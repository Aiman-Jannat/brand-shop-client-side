import { useEffect, useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import ShowSimilarProducts from "./ShowSimilarProducts";
import Slider from "../slider/Slider";


const Product = () => {
    const [service, setService] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('/brand.json')
        .then(rs=>rs.json())
        .then(data => setService(data));
    },[]);
    const products = useLoaderData();
    const {id} = useParams();
    
    const specific = service.filter(data => data.id==id);
    // console.log(specific[0]?.name)
   const matching = products.filter(data => (data.brandName==specific[0]?.name));
    console.log(matching)
    
    

    


    return (
        <>
        <div className="flex justify-center">
        <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">Available Foods in Our Brand</p>
        </div>
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          
          
          {
            matching.map(show => <ShowSimilarProducts key={show._id} show={show}></ShowSimilarProducts>)
          }

          
        </div>
        <Slider className=""></Slider>
        </>
    );
};

export default Product;
