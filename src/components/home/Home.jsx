import {  useLoaderData } from "react-router-dom";
import Banner from "../header/Banner";
import ShowBrand from "../samePage/ShowBrand";
import { useEffect, useState } from "react";



const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
useEffect(()=>{
  localStorage.setItem("theme",theme);
  const localTheme = localStorage.getItem('theme');
  document.querySelector("html").setAttribute('data-theme',localTheme);
},[theme])
    const brands = useLoaderData();
    const handleToggle = e =>{
      if(!e.target.checked){
        setTheme("dark");
      }
      else{
        setTheme("light");
      }
    }
    return (
        <div className="bg-base-200 dark:bg-black dark:text-white">
          <label className="swap swap-rotate ">
  
 
  <input type="checkbox" onChange={handleToggle}/>
  
  
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
 
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
            <Banner></Banner>
            <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">Available Brands in Our Website</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 pb-14">
              

                {
                    brands.map(brand=><ShowBrand  key={brand.id} brand={brand}></ShowBrand>)
                }
            </div>

            <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">About Us</p>
<div className="flex-col   lg:flex justify-center gap-10 px-24 pb-7">
            <div className="text-2xl bg-pink-50 p-14">
                <ul className="list-disc">
                    <li>Oue company is a reknowned company in bangladesh</li>
                    <li>We gave people fresh foods</li>
                    <li>We always make our client happy</li>
                </ul>
            </div>
            <div className="text-2xl bg-pink-50 p-14">
            <ul className="list-disc">
                    <li>Anyone can purchase foods via online and got at home</li>
                    <li>we prioratize customer satisfaction</li>
                    <li>We are ready to take customer feedback </li>
                </ul>
            </div>
          
        </div>
        <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">Some Common Q&A</p>
        <div className="join join-vertical w-full px-10">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
      Is this Shop Open for 24hr?
    </div>
    <div className="collapse-content"> 
      <p>Yes, We Provide services for 24hrs. Any user can put his/her order anytime. We are here to respond you.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Are all the products authentic?
    </div>
    <div className="collapse-content"> 
      <p>Yes, We can ensure you about our products. You can also check our customers feedback and take decision. We never force any customer to buy Something.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
     Is this Company certified by Government?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we are certified by Bangladesh Government.</p>
    </div>
  </div>
</div>
       
        </div>
    );
};

export default Home;