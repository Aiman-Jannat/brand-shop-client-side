import { Navigate, useNavigate } from "react-router-dom";
import Product from "../Pages/Product";
import Slider from "../slider/Slider";


const ShowBrand = ({brand}) => {
    const {id,image, name} = brand;
const navigate = useNavigate();
    const handleClick = () =>{
      
      navigate(`/home/${id}`);
  }

    return (
        <div>
            <div onClick={handleClick} className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    
  
  </div>
</div>

        </div>
    );
};

export default ShowBrand;