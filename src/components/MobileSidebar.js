import React, { useState } from "react";
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
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";
import photo from "../assests/me.jpg";

const profileData = [
  { img: photo, name: "Sandeep", position: "Project Manager" },
];

const MobileSidebar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = (data) => {
    setNav(data);
  };
  return (
    <>
      <div className="w-full flex justify-between px-2 py-5 bg-indigo-950 md:hidden">
        <div className="flex text-gray-300 space-x-2">
          <BiSolidDashboard className="text-3xl" />
          <span className="font-semibold text-xl tracking-wide">Dashboard</span>
        </div>
        <div className="font-semibold text-3xl tracking-wide text-gray-300">
          {nav ? (
            <CgCloseR
              onClick={() => {
                handleClick(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                handleClick(true);
              }}
            />
          )}
        </div>
      </div>
      {nav ? (
        <div className="w-full min-h-[75vh] bg-indigo-950 px-2 pt-5 pb-10 space-y-10 z-50 absolute top-16 md:hidden">
          <div className="px-3 pb-24">
            <ul className="space-y-3">
              <li className="sidebar-items">
                <Link
                  to="/"
                  className="w-fit flex items-center"
                  onClick={() => {
                    handleClick(false);
                  }}
                >
                  <RxDashboard className="text-3xl mr-3" />
                  Dashboard
                </Link>
              </li>
              <li className="sidebar-items">
                <Link
                  to="/product"
                  className="w-fit flex items-center"
                  onClick={() => {
                    handleClick(false);
                  }}
                >
                  <MdProductionQuantityLimits className="text-3xl mr-3" />
                  Product
                </Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
              <li className="sidebar-items">
                <Link
                  to="/customers"
                  className="w-fit flex items-center"
                  onClick={() => {
                    handleClick(false);
                  }}
                >
                  <IoPeopleCircleOutline className="text-3xl mr-3" />
                  Customers
                </Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
              <li className="sidebar-items">
                <Link
                  to="/income"
                  className="w-fit flex items-center"
                  onClick={() => {
                    handleClick(false);
                  }}
                >
                  <RiMoneyDollarCircleLine className="text-3xl mr-3" />
                  Income
                </Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
              <li className="sidebar-items">
                <Link
                  to="/promote"
                  className="w-fit flex items-center"
                  onClick={() => {
                    handleClick(false);
                  }}
                >
                  <LuBadgePercent className="text-3xl mr-3" />
                  Promote
                </Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
              <li className="sidebar-items">
                <Link
                  to="/help"
                  className="w-fit flex items-center"
                  onClick={() => {
                    handleClick(false);
                  }}
                >
                  <LuBadgeHelp className="text-3xl mr-3" />
                  Help
                </Link>
                <MdOutlineKeyboardArrowRight className="text-3xl" />
              </li>
            </ul>
          </div>
          {profileData &&
            profileData.map((currItem) => {
              return (
                <div className="flex justify-between items-center bg-gray-300/20 shadow rounded py-4 px-6">
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
      ) : null}
    </>
  );
};

export default MobileSidebar;
