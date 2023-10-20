import Product from "./Product";


const AddProduct = () => {

    const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    
        const name = form.name.value;
        const brandName = form.brandName.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const newProduct = {name, brandName, rating, type,price
        ,photo,description}
        console.log(newProduct);

        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div className="mb-5">
           <p className="text-5xl text-pink-900 text-center font-extrabold my-10">Add Product</p>

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

            
            <div className="form-control col-span-2 w-full">
  <label className="label">
    <span className="label-text text-black font-bold">Short Description</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="description" placeholder="short description" className="w-full input input-bordered" />
  </label>
</div>
<div className="form-control grid col-span-2 w-full ">
 
  <label className="input-group ">
    
    <input type="submit" placeholder="submit" value="Add Product" className="bg-pink-900 text-white font-bold w-full input input-bordered" />
  </label>
</div>

            </form>





            </div> 
        </div>
    );
};

export default AddProduct;