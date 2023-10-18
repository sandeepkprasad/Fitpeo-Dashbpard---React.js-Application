import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  MdProductionQuantityLimits,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuBadgePercent, LuBadgeHelp } from "react-icons/lu";
import photo from "../assests/me.jpg";

const profileData = [
  { img: photo, name: "Sandeep", position: "Project Manager" },
];

const Sidebar = () => {
  return (
    <div className="w-1/6 min-h-[100vh] bg-indigo-950 px-2 pt-5 pb-10 fixed top-0 left-0 space-y-10 hidden md:block">
      <div className="flex text-gray-300 space-x-2 px-3">
        <BiSolidDashboard className="text-3xl" />
        <span className="font-semibold text-xl tracking-wide">Dashboard</span>
      </div>
      <div className="px-3 pb-32">
        <ul className="space-y-3">
          <li className="sidebar-items">
            <Link to="/" className="w-fit flex items-center">
              <RxDashboard className="text-xl mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-items">
            <Link to="/product" className="w-fit flex items-center">
              <MdProductionQuantityLimits className="text-xl mr-3" />
              Product
            </Link>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </li>
          <li className="sidebar-items">
            <Link to="/customers" className="w-fit flex items-center">
              <IoPeopleCircleOutline className="text-xl mr-3" />
              Customers
            </Link>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </li>
          <li className="sidebar-items">
            <Link to="/income" className="w-fit flex items-center">
              <RiMoneyDollarCircleLine className="text-xl mr-3" />
              Income
            </Link>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </li>
          <li className="sidebar-items">
            <Link to="/promote" className="w-fit flex items-center">
              <LuBadgePercent className="text-xl mr-3" />
              Promote
            </Link>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </li>
          <li className="sidebar-items">
            <Link to="/help" className="w-fit flex items-center">
              <LuBadgeHelp className="text-xl mr-3" />
              Help
            </Link>
            <MdOutlineKeyboardArrowRight className="text-xl" />
          </li>
        </ul>
      </div>
      {profileData &&
        profileData.map((currItem) => {
          return (
            <div className="flex justify-between items-center bg-gray-300/20 shadow rounded py-2 px-3">
              <div className="flex space-x-3">
                <img
                  src={currItem.img}
                  alt="..."
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <div className="text-xs">
                  <p className="text-gray-300 font-bold">{currItem.name}</p>
                  <p className="text-gray-500">{currItem.position}</p>
                </div>
              </div>
              <MdOutlineKeyboardArrowDown className="text-xl text-gray-500" />
            </div>
          );
        })}
    </div>
  );
};

export default Sidebar;
