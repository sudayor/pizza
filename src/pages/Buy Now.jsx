import React from "react";
import TransitionPage from "../component/TransitionPage";
import { motion } from "framer-motion";
import Card from "../component/Card";

const Buy = () => {
  return (
    <TransitionPage>
      <div className="flex  justify-center mt-[50px]" >
        <div className="carta p-4 px-8 py-8 border rounded-md shadow-md mt-5 w-[700px] h-[500px]">
          <input type="text" className="border border-sky-600 rounded-full px-2 py-1" placeholder="Ism Familya" />
          <div className="flex justify-end mt-[-38px] mr-[50px]">
          <select name="pets" class=" text-white  gap-2 bg-teal-500 rounded-full py-2 px-6 mb-2 text-sm 
            leading-6 font-semibold  dark:text-sky-400" id="pet-select">
            <option  value="">Go`shtli pizza</option>
            <option  value="cat">Sirli pizza</option>
            <option  value="dog"> Neapolit pizza</option>
            <option  value="hamster">Sasiskali pizza</option>
            <option  value="parrot">Pepperoni pizza</option>
            <option  value="spider">Margarita pizza</option>
            <option  value="goldfish">Unversal pizza</option>
          </select>
          </div>
          <div className="mt-5  ">
          <div className="flex  gap-5">
          <input type="text" className="border border-sky-600 rounded-full px-2 py-1" placeholder="Telefon raqam" />
          <input type="text" className="border border-sky-600 rounded-full px-2 py-1" placeholder="Uy Manzili" />
          </div>
          <div className="mt-[-35px] ml-[440px]">
          <select name="pets" class=" text-white  gap-2 bg-teal-500 rounded-full py-2 px-6 mb-2 text-sm 
            leading-6 font-semibold  dark:text-sky-400" id="pet-select">
             <option value="">Yashash Manzili</option>
             <option>Bog'ot tumani</option>
             <option>Gurlan tumani</option>
             <option>Qo'shko'pir tumani</option>
             <option>Shovot tumani</option>
             <option>Urganch shahri</option>
             <option>Urganch tumani</option>
             <option>Xazorasp tumani</option>
             <option>Xiva tumani</option>
             <option>Xonqa tumani</option>
             <option>Yangiariq tumani</option>
             <option>Yangibozor tumani</option>
           </select>
          </div>
          </div>
          <div className="flex justify-evenly mt-[100px] ">
            <button className="py-2 px-6 border bg-teal-500 text-white hover:bg-black font-semibold rounded-full">
              Buy Now
            </button>
          </div>
        </div>
        
      </div>
    </TransitionPage>
  );
};

export default Buy;
