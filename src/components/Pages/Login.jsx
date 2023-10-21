import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {ToastContainer, toast } from "react-toastify";


const Login = () => {
  const [error, setError] = useState('');
  const[success, setSuccess] = useState(false);
  const {userr, signIn, logout, signInG} = useContext(AuthContext);
  
  
  
  const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      setError('');
      setSuccess(false);
      // console.log(email, password);
      signIn(email, password)
    .then(res => {setSuccess(true);
    form.reset();
    toast('User logged in Successfully');
   
  })
    .catch(error=>setError(error.message));

   
   
   
    }

    const handleGoogle = () =>{
      signInG()
      .then(res=>{
        console.log(res.user);
     })
     .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-pink-50">
  <div className="hero-content flex-col px-24">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-pink-900">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        
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
          
        </div>
        {error?<p className="text-red-500">{error}</p>:success?<p className="text-green-900">Successfully logged in!</p>:''}
        <div className="form-control mt-6">
            <input type="submit" className="bg-pink-800 rounded-md py-3 text-white font-bold" value="Login" />
          
      </div>
      <a className="text-blue-300 underline" onClick={handleGoogle}><button className="bg-pink-800 w-full rounded-md py-3 text-white font-bold">Login With Google</button></a>
          <p>Don not have an Account? Please <Link to='/register'><span className="text-blue-900 underline">register</span></Link></p>
          
      </form>
    </div>
  </div>
</div><ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;