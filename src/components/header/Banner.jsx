import Navbar from "./Navbar";


const Banner = () => {
    return (
        <div>
            
            <div className=" bg-pink-100  ">
  <div className=" px-10  flex justify-between items-center flex-col lg:flex-row-reverse ">
    <div className=" w-full lg:w-1/2  h-full ">
    <img  src="https://slideplayer.com/slide/16099498/88/images/3/I+feel+great%21+I%E2%80%99m+thirsty.+I%E2%80%99m+hungry.+I%E2%80%99m+sick.+I%E2%80%99m+tired..jpg" className="my-5  h-full w-full  rounded-lg shadow-2xl" />
    </div>
    <div className="py-10">
      <h1 className="text-7xl font-bold">Are You <span className="text-red-600">Hungry!</span></h1>
      <p className="py-6 italic "> A state of anger caused by lack of food; hunger causing a negative change in emotional state </p>
      <p className="text-1xl text-pink-800 font-bold bg-pink-300 p-5 rounded-lg w-fit py-2">Order NOW!!</p>
      
    </div>
    
  </div>
</div>
            
        </div>
    );
};

export default Banner;