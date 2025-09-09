import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
const Nav = ({onSearch}) => {
    const handleSearch = (e) => {
        onSearch(e.target.value)
    }
  return (
    <div className="flex justify-around items-center h-25 w-[85%] bg-[#ffffff] fixed ml-[15%] ">
      <div className="flex items-center justify-center">
        <form action="">
          <input
            type="text"
            placeholder="Search Products ..."
            className="border-2 border-black rounded-xl px-3 py-2 font-light -ml-34"
            onChange={handleSearch}
          />
        </form>
      </div>

      <div className="flex items-center gap-5">
        <div><AiOutlineUser className='text-4xl cursor-pointer hover:text-orange-500'/></div>
        <div><AiOutlineHeart className='text-4xl cursor-pointer hover:text-red-500'/></div>
        <div><AiOutlineShopping className='text-4xl cursor-pointer hover:text-yellow-500'/></div>
      </div>
    </div>
  );
}

export default Nav