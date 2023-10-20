import {  useLoaderData } from "react-router-dom";
import Banner from "../header/Banner";
import ShowBrand from "../samePage/ShowBrand";



const Home = () => {
    const brands = useLoaderData();
    
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">Available Brands in Our Website</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 pb-14">
              

                {
                    brands.map(brand=><ShowBrand  key={brand.id} brand={brand}></ShowBrand>)
                }
            </div>

            <p className="my-12 p-5 w-fit mx-auto text-center text-4xl text-pink-900 font-bold border-2 border-red-950">About Us</p>
<div className="flex justify-center gap-10 px-24 pb-7">
            <div>
                <ul className="list-disc">
                    <li>Oue company is a reknowned company in bangladesh</li>
                    <li>We gave people fresh foods</li>
                    <li>We always make our client happy</li>
                </ul>
            </div>
            <div>
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