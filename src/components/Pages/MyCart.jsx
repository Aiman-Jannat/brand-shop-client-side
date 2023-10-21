import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const MyCart = () => {

    const allMyCarts = useLoaderData();
    const {userr} = useContext(AuthContext);
    const array = allMyCarts.filter(data => data.email==userr.email);
    console.log(array);
    return (
        <div>
            
        </div>
    );
};

export default MyCart;