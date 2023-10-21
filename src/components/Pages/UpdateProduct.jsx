import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateProduct = () => {
    const updatingId = useParams();
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        
            const name = form.name.value;
            const brandName = form.brandName.value;
            const rating = form.rating.value;
            const type = form.type.value;
            const price = form.price.value;
            const photo = form.photo.value;
            
            const updatedProduct = {name, brandName, rating, type,price
            ,photo}
            console.log(updatingId);
                fetch(`http://localhost:5000/users/${updatingId.id}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updatedProduct)
                })
                .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged)
            {
                toast("Your data has been successfully updated");
            }
        })

    }
    return (
        <div className="mb-5">
        <p className="text-5xl text-pink-900 text-center font-extrabold my-10">Update Product</p>

        <div className="w-9/12 mx-auto bg-pink-50 p-10">
         <form onSubmit={handleSubmit} className="grid text-black grid-cols-1 md:grid-cols-2 gap-3 ">
         
         <div className="form-control">
<label className="label">
 <span className="label-text text-black font-bold">Product Name</span>
</label>
<label className="input-group">
 
 <input type="text" name="name" placeholder="Name" className="rounded-ss-none w-full input input-bordered" />
</label>
</div>

<div className="form-control">
<label className="label">
 <span className="label-text text-black font-bold">Brand Name</span>
</label>
<label className="input-group">
 
 <input type="text" name="brandName" placeholder="supplier" className="w-full input input-bordered" />
</label>
</div>

<div className="form-control">
<label className="label">
 <span className="label-text text-black font-bold">Rating</span>
</label>
<label className="input-group">
 
 <input type="text" name="rating" placeholder="category" className=" w-full input input-bordered" />
</label>
{/* <Product></Product> */}
</div>


         

         
         <div className="form-control">
<label className="label">
 <span className="label-text text-black font-bold">Type of the food</span>
</label>
<label className="input-group">
 
 <input type="text" name="type" placeholder="Name" className="w-full input input-bordered" />
</label>
</div>

<div className="form-control">
<label className="label">
 <span className="label-text text-black font-bold">Price</span>
</label>
<label className="input-group">
 
 <input type="text" name="price" placeholder="taste" className="w-full input input-bordered" />
</label>
</div>

<div className="form-control">
<label className="label">
 <span className="label-text text-black font-bold">Photo URL</span>
</label>
<label className="input-group">
 
 <input type="text" placeholder="photo" name="photo" className="w-full input input-bordered" />
</label>
</div>

         
         
<div className="form-control grid col-span-2 w-full ">

<label className="input-group ">
 
 <input type="submit" placeholder="submit" value="Update Product" className="bg-pink-900 text-white font-bold w-full input input-bordered" />
</label>
</div>

         </form>





         </div> 
     </div>
    );
};

export default UpdateProduct;