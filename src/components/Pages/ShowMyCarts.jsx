import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";


const ShowMyCarts = ({show}) => {
    const {_id, name, brandName, rating, type,price
        ,photo,description} = show;
        

        
   
        const handleDel = _id =>{
            fetch(`http://localhost:5000/carts/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged)
                toast("Your product has been deleted successfully")
            })
        }


    return (
        <div>
            <div className="flex flex-grow">
          <div className="flex flex-grow pb-5">
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="h-52"><img className="h-full w-full" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{type}</div>
    </h2>
    <p>{description}</p>
    <div className="block">
      <div className="badge badge-outline">{price}</div> 
      <div className="badge badge-outline">{brandName}</div>
      </div>
    <div className="card-actions justify-end">
    <div className="rating flex justify-start  w-full">
  <input type="radio" name={`rating-${rating}`} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${rating}`}  className="mask mask-star-2 bg-orange-400" />
</div>
</div>
</div>
<div className=" w-full mt-5 gap-5 flex justify-around">
<Link><button onClick={()=>handleDel(_id)} className="btn px-14 text-white font-bold btn-error mb-5 w-full">Delete</button></Link>

    
</div>


    </div>
  </div>
</div>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowMyCarts;