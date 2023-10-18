import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-fit">
        <h4 className="font-bold text-lg text-gray-900">Hello Sandeep 👋🏼,</h4>
      </div>
      <div className="w-fit flex items-center bg-white rounded-lg py-1 px-2">
        <BiSearch className="text-2xl text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-gray-300 placeholder:text-sm pb-0.5"
        />
      </div>
    </div>
  );
};

export default Header;
