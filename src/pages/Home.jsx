import React from "react";
import TransitionPage from "../component/TransitionPage";
import App from "../App.css";
import Card from "../component/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <TransitionPage>
      <div className=" text-white div flex flex-col gap-10 justify-center items-center  h-[60vh]">
        <h1 className="text-6xl">Pizza Center</h1>
        <p className="w-1/2 text-center text-xl not-italic min-[320px]:text-center max-[600px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem cum quam debitis similique deleniti numquam.  
        </p>
        <div className="flex gap-8">
          <button className="py-2 px-6 hover:bg-black bg-teal-500 text-white font-semibold rounded-full">
            <a href="./About">About Us</a>
          </button>
          <button className="py-2 px-6 border hover:bg-black border-teal-500 text-teal-500 font-semibold rounded-full">
            <a href="/BuyNow">Buy Now</a>
          </button>
        </div>
      </div>
      <div className="flex justify-around py-10  ">
        <div className="flex gap-[100px] justify-center mt-10 py-3 ">
        {new Array(3).fill(1).map((_, index) => {
          return <Card key={index} />;
        })}
      </div > 
      </div> 
      <div className="bg-purple-800 px-4 py-3  text-white  h-[130px] rounded-xl ">
        <div className="w-5 h-4 ">
        <img src="https://cdn-icons-png.flaticon.com/512/2582/2582606.png" className="hover:bg-red-600  "  alt="telegram" /><br />
        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png " className="hover:bg-red-600  "  alt="instagram" /><br />
        <img src="https://cdn-icons-png.flaticon.com/512/87/87421.png"  className="hover:bg-red-600  " alt="youtube" />
        </div>
        <div className="ml-7 mt-[-22px]  ">
        <p>https://api.lorem.space/image/pizza</p><br />
        <p>https://api.lorem.space/image/pizza</p><br />
        <p>https://api.lorem.space/image/pizza</p>
        </div>
        <div className="flex w-[500px] ml-[450px] mt-[-100px]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magni dolor, voluptate id molestias aperiam iure necessitatibus ipsam sint repudiandae, porro dolore vitae accusamus minima.</p>
        </div>
        <div className="flex ml-[999px] mt-[-93px] gap-9">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Xorazm_Viloyati_in_Uzbekistan.svg/640px-Xorazm_Viloyati_in_Uzbekistan.svg.png" className=" w-[150px] h-[120px] " />
        <img src="https://mapsoid.ru/_pu/30/06162502.jpg" className=" w-[150px] h-[120px] " />
        </div>
      </div>
    </TransitionPage>
  );
};

export default Home;
