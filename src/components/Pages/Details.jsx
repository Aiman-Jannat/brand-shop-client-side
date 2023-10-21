import { useLoaderData } from "react-router-dom";


const Details = () => {
    const productDetails  = useLoaderData();
   
    return (
        <div className="border">
            <div className="card  w-fit  lg:card-side  bg-base-100 shadow-xl  m-10 border-red-900">
  <figure className="w-1/2"><img className="w-full h-full" src={productDetails.photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold text-pink-700">{productDetails.name}</h2>
    <p className="italic">{productDetails.description}</p>
    <p className="bg-pink-300 border py-1 px-3 w-fit rounded-lg">{productDetails.type}</p>
    
    <p className="text-2xl font-bold">{productDetails.brandName}</p>
    <p className="w-fit p-1 px-5 font-bold border rounded-lg">{productDetails.price}</p>
    <div className="rating flex justify-start  w-full">
  <input type="radio" name={`rating-${productDetails.rating}`} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${productDetails.rating}`}  className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name={`rating-${productDetails.rating}`}  className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${productDetails.rating}`}  className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={`rating-${productDetails.rating}`}  className="mask mask-star-2 bg-orange-400" />
</div>
    <div className="card-actions justify-start mt-5">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Details;