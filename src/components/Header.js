import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    
    const dispatch = useDispatch();

    const handleShowMenu = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="flex items-center justify-between m-2 py-5 px-10 gap-80 shadow-lg">
      <div className="flex w-20 gap-5 ">
        <button  onClick={handleShowMenu}>
          <RxHamburgerMenu size="25px" />
        </button>
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube logo"
          className="w-20"
        />
      </div>
      <div className="flex items-center justify-between  rounded-3xl flex-1 border border-gray-600 px-2 ">
        <input
          type="text"
          placeholder="Search"
          className=" w-full outline-none p-2 rounded-3xl "
        />
        <button className="">
          <CiSearch size="20px" className="" />
        </button>
      </div>
      <div>
        <FaRegUser />
      </div>
    </div>
  );
};

export default Header;
