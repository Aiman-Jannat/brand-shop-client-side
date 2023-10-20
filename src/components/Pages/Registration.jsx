import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";

  


const Registration = () => {

    const [regError, setRegError] = useState('');
    const [success, setSuccess] =  useState(false);

    const {createUser, userr} = useContext(AuthContext);

    console.log(userr);
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}|[\]:";'<>?,./]/;
  



    const handleSubmit = e =>{
         e.preventDefault();
         const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password, photoUrl)
        setRegError('');
        setSuccess('');

        if(password.length<6)
        {
           setRegError("Password must be at least 6 character.") 
            return;
        }
        else if(!(uppercaseRegex.test(password)&&specialCharRegex.test(password)))
        {
            setRegError("Password must contain at least one spatial character and capital letter")
            return;
        }
        else{
            createUser(email, password, name, photoUrl )
            setSuccess(true);
            toast('Your account has been created successfully!')
            form.reset();
            return;
        }

    }

    return (
        <div>
            <div className="hero min-h-screen bg-pink-50 ">
<div className="hero-content flex-col px-24">
<div className="text-center  lg:text-left">
<h1 className="text-5xl font-bold text-pink-900">Register now!</h1>

</div>
<div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form className=" p-5 " onSubmit={handleSubmit} >
  <div className="form-control">
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo URL</span>
    </label>
    <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
    {
      regError && <p >{regError}</p>
    }
    
  </div>
  <div className="form-control mt-6">
      <input type="submit" className="bg-pink-800 rounded-md py-3 text-white font-bold" value="Register" />
    
  </div>
  <p>Already have an account? please <Link to='/login'><span className="text-blue-800 underline">login</span></Link> </p>
</form>
</div>
</div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;