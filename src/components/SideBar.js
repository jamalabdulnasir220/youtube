import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdVideoSettings } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isMenuOpen } = useSelector((store) => store.app);

  if (!isMenuOpen) return null;

  return (
    <div className=" flex flex-col w-56 shadow-lg p-5 justify-between gap-10">
      <div>
        <ul className="flex flex-col gap-3">
          <li className="">
            <Link to="/" className="flex items-center gap-2">
              <IoMdHome size="25px" />
              Home
            </Link>
          </li>
          <li className="flex items-center gap-2 ">
            <SiYoutubeshorts size="25px" />
            Shorts
          </li>
          <li className="flex items-center gap-2 ">
            <MdVideoSettings size="25px" />
            Videos
          </li>
          <li className="flex items-center gap-2 ">
            <MdLiveTv size="25px" />
            Live
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg">Subscription</h1>
        <ul flex flex-col gap-3>
          <li className="flex items-center gap-2 ">
            <IoMusicalNotesSharp size="25px" />
            Music
          </li>
          <li className="flex items-center gap-2 ">
            <MdOutlineSportsGymnastics size="25px" />
            Sports
          </li>
          <li className="flex items-center gap-2 ">
            <SiYoutubegaming size="25px" />
            Gaming
          </li>
          <li className="flex items-center gap-2">
            <MdLocalMovies size="25px" />
            Movies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
