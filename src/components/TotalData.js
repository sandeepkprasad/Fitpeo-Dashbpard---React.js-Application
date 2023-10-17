import React from "react";
import { RiExchangeDollarLine, RiFileListLine } from "react-icons/ri";
import { TbReportMoney, TbShoppingBag } from "react-icons/tb";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TotalData = () => {
  return (
    <div className="w-full flex space-x-8">
      <div className="total-card">
        <div className="bg-green-100 rounded-full p-7">
          <RiExchangeDollarLine className="text-5xl text-green-600" />
        </div>
        <div>
          <p className="font-bold text-xs text-slate-400">Earning</p>
          <h4 className="font-bold text-lg text-gray-950">$198k</h4>
          <p className="flex font-bold text-xs text-green-600">
            <AiOutlineArrowUp className="mt-0.5" />
            37% <strong className="text-gray-600">this month</strong>
          </p>
        </div>
      </div>
      <div className="total-card">
        <div className="bg-purple-100 rounded-full p-7">
          <RiFileListLine className="text-5xl text-purple-600" />
        </div>
        <div>
          <p className="font-bold text-xs text-slate-400">Order</p>
          <h4 className="font-bold text-lg text-gray-950">$2.4k</h4>
          <p className="flex font-bold text-xs text-red-600">
            <AiOutlineArrowDown className="mt-0.5" />
            2% <strong className="text-gray-600">this month</strong>
          </p>
        </div>
      </div>
      <div className="total-card">
        <div className="bg-blue-100 rounded-full p-7">
          <TbReportMoney className="text-5xl text-blue-600" />
        </div>
        <div>
          <p className="font-bold text-xs text-slate-400">Balance</p>
          <h4 className="font-bold text-lg text-gray-950">$2.4k</h4>
          <p className="flex font-bold text-xs text-red-600">
            <AiOutlineArrowDown className="mt-0.5" />
            2% <strong className="text-gray-600">this month</strong>
          </p>
        </div>
      </div>
      <div className="total-card">
        <div className="bg-red-100 rounded-full p-7">
          <TbShoppingBag className="text-5xl text-red-600" />
        </div>
        <div>
          <p className="font-bold text-xs text-slate-400">Total Sales</p>
          <h4 className="font-bold text-lg text-gray-950">$89k</h4>
          <p className="flex font-bold text-xs text-green-600">
            <AiOutlineArrowUp className="mt-0.5" />
            11% <strong className="text-gray-600">this week</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalData;
