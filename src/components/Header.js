import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { addToCache } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedText, setSuggestedText] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make the api call on every keystroke
    const timeOutId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestedText(searchCache[searchQuery]);
      } else {
        getSearchData();
      }
    }, 200);
    return () => clearTimeout(timeOutId);
  }, [searchQuery]);

  const getSearchData = async () => {
    if (searchQuery !== "") {
      const data = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchQuery}`
      );
      const json = await data.json();
      setSuggestedText(json);
      dispatch(addToCache({
        [searchQuery]: json
      }));
    }
  };

  const dispatch = useDispatch();

  const handleShowMenu = () => {
    dispatch(toggleMenu());
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    } else if (
      e.key === "ArrowDown" &&
      selectedItem < suggestedText.length - 1
    ) {
      setSelectedItem((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-between m-2 py-5 px-10 gap-80 shadow-lg">
      <div className="flex w-20 gap-5 ">
        <button onClick={handleShowMenu}>
          <RxHamburgerMenu size="25px" />
        </button>
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube logo"
          className="w-20"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between  rounded-3xl  border border-gray-600 px-2 ">
          <input
            type="text"
            placeholder="Search"
            className=" w-full outline-none p-2 rounded-3xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {searchQuery === "" ? (
            <button className="">
              <CiSearch size="20px" className="" />
            </button>
          ) : (
            <button className="">
              <IoMdClose
                onClick={() => {
                  setSearchQuery("");
                  setSuggestedText([]);
                }}
                size="20px"
                className=""
              />
            </button>
          )}
        </div>
        {showSuggestions && (
          <div
            className={`${
              !searchQuery
                ? "bg-none"
                : "fixed bg-white py-2 px-5 w-96 shadow-lg border border-gray-100 rounded-lg"
            }`}
          >
            <ul>
              {suggestedText.map((s, index) => (
                <li
                  className="py-2 shadow-sm hover:bg-gray-100"
                  key={s.show.id}
                >
                  {s.show.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <FaRegUser />
      </div>
    </div>
  );
};

export default Header;
