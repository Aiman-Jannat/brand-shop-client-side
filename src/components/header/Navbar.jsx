
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';


const Navbar = () => {
  const {userr, logout} = useContext(AuthContext);

    return (
        <div className="pb-2 px-10">
        <div className="">
<div className="  flex px-5 justify-between w-full py-2 ">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-5 z-[1] p-2   ">
     <NavLink to = "/" className={({ isActive}) =>
 isActive ? "text-[#FF444A] underline" : ""
} >Home</NavLink>
     <NavLink to = '/addProduct' className={({ isActive}) =>   
 isActive ? "text-[#FF444A] underline" : ""
} >Add Product</NavLink>
     <NavLink to = '/myCart' className={({ isActive}) =>
 isActive ? "text-[#FF444A] underline" : ""
}>My Cart</NavLink>
     {/* {userr&&<>
       <NavLink to = '/dashboard' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>Dashboard</NavLink>
           <NavLink to = '/profile' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>Profile</NavLink>
     </>
     } */}
     
   </ul>
 </div>
 <img className="hidden h-10 " src='https://i.ibb.co/MGpjPw1/Icon-Foods.png' alt="" />
</div>
<div className="flex justify-between">
 <div>
 <img className="h-10" src='https://i.ibb.co/MGpjPw1/Icon-Foods.png' alt="" />
 </div>
<div className=" hidden lg:flex h-10 font-bold  py-2 items-center ">
 <ul className="flex gap-5 text-sm  ">
 <NavLink to='/' className={({ isActive}) =>
 isActive ? "text-[#FF444A] underline" : ""
} >Home</NavLink>
     <NavLink to = '/addProduct' className={({ isActive}) =>
 isActive ? "text-[#FF444A] underline" : ""
} >Add Product</NavLink>
     <NavLink to = '/myCart' className={({ isActive}) =>
 isActive ? "text-[#FF444A] underline" : ""
}>My Cart</NavLink>
     {/* {userr&&<>
       <NavLink to = '/myCart' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>My Carts</NavLink>
           
     </>
     } */}
 </ul>
 
</div>
<div className="flex justify-center gap-3 items-center">
{
         userr?<p className="text-purple-900 font-bold">{userr.displayName}</p>:''
       } 
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
     <div className="w-10 rounded-full">
    
       {
         userr?<img src={userr.photoURL} />:<img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" />
       }
       
       
     </div>
   </label>
   {
     userr? <Link to="/"> <button onClick={logout}  className="border border-blue-800 bg-pink-200 px-6 py-1 rounded-md">Logout</button></Link>: <Link to="/login"> <button className="bg-pink-200 border border-blue-800 px-6 py-1 rounded-md">Login</button></Link>
   }
 
</div>
</div>

</div> 
     </div>
    );
};

export default Navbar;