import React from "react";
import { BiSearch } from "react-icons/bi";

const ProductSellHeader = () => {
  return (
    <div className="w-full h-full p-0 flex justify-between">
      <h4 className="font-bold text-lg text-gray-900">Product Sell</h4>
      <div className="flex space-x-5">
        <div className="flex items-center bg-white rounded-lg py-1 px-2">
          <BiSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-gray-300 placeholder:text-sm pb-0.5"
          />
        </div>
        <div>
          <select
            className="form-select font-bold text-xs text-slate-400 bg-gray-100 p-1 rounded"
            id="data"
            name="data"
            value=""
            required
          >
            <option value="Quarterly">Last 30 days</option>
            <option value="Yearly">Last 60 days</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSellHeader;
