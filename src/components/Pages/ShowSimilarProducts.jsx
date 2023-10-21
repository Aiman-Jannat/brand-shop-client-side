import { Link } from "react-router-dom";


const ShowSimilarProducts = ({show}) => {
   
   const {_id, name, brandName, rating, type,price
        ,photo,description} = show;
   
   const handleUpdate = () =>{

   }
    return (
        <div className="flex flex-grow">
          <div className="flex flex-grow">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="h-52"><img src={photo} alt="Shoes" /></figure>
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
<div className=" w-full mt-5 gap-5 flex justify-around">
<Link to={`/details/${_id}`}><button className="btn btn-secondary">Details</button></Link>

    <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
</div>


    </div>
  </div>
</div>

        </div>
    );
};

export default ShowSimilarProducts;