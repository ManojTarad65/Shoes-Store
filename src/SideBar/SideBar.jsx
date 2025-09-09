import React from 'react'
import Category from './Category/Category'
import Color from './Color/Color'
import Price from './Price/Price'
import { FaShoppingBag } from "react-icons/fa";
const SideBar = ({onCategoryChange, onColorChange, onPriceChange}) => {
  
  return (
    <div className=" h-screen bg-[#ffffff] w-[15%] fixed text-black border-r-2  border-black">
      <div className="text-3xl flex justify-center mb-20 cursor-pointer mt-4">
        <FaShoppingBag />
      </div>
      <div className="flex flex-col gap-4 text-center text-xl font-bold font-arial">
        <Category onCategoryChange={onCategoryChange}/>
        <Color onColorChange={onColorChange}/>
        <Price onPriceChange={onPriceChange}/>
      </div>
    </div>
  );
}

export default SideBar