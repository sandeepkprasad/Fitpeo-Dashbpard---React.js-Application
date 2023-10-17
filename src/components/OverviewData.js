import React, { useEffect, useState } from "react";

const earningData = [
  { id: "1", month: "Jan", earning: "h-[60%]" },
  { id: "2", month: "Feb", earning: "h-[40%]" },
  { id: "3", month: "Mar", earning: "h-[90%]" },
  { id: "4", month: "Apr", earning: "h-[70%]" },
  { id: "5", month: "May", earning: "h-[80%]" },
  { id: "6", month: "Jun", earning: "h-[30%]" },
  { id: "7", month: "Jul", earning: "h-[85%]" },
  { id: "8", month: "Aug", earning: "h-[65%]" },
  { id: "9", month: "Sep", earning: "h-[80%]" },
  { id: "10", month: "Oct", earning: "h-[100%]" },
  { id: "11", month: "Nov", earning: "h-[60%]" },
  { id: "12", month: "Dec", earning: "h-[70%]" },
];

const OverviewData = () => {
  const [month, setMonth] = useState();

  useEffect(() => {
    const currDate = new Date();
    let currMonth = currDate.getMonth() + 1;
    setMonth(currMonth);
  }, []);

  return (
    <div className="flex w-full space-x-8">
      <div className="w-[67%] h-[320px] bg-white rounded-xl p-5">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold text-lg text-gray-900">Overview</h4>
            <p className="font-bold text-xs text-slate-400">Monthly Earning</p>
          </div>
          <div>
            <select
              className="form-select font-bold text-xs text-slate-400 bg-gray-100 p-1 rounded"
              id="data"
              name="data"
              value=""
              required
            >
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="w-full h-4/5">
          <ul className="flex justify-between">
            {earningData &&
              earningData.map((currItem) => {
                return (
                  <li className="text-center" key={currItem.id}>
                    <div className="w-10 h-48 relative top-[10px] flex items-end">
                      <div
                        className={`w-full ${currItem.earning}
                         ${
                           currItem.id === JSON.stringify(month)
                             ? "bg-indigo-700"
                             : "bg-indigo-100"
                         } rounded-xl`}
                      ></div>
                    </div>
                    <span className="font-bold text-xs text-slate-500 relative top-[25px]">
                      {currItem.month}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="w-[30%] h-[320px] bg-white rounded-xl p-5 space-y-5">
        <div className="w-fit">
          <h4 className="font-bold text-lg text-gray-900">Customers</h4>
          <p className="font-bold text-xs text-slate-400">
            Customers that buy products
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-indigo-100 rounded-full p-4">
            <div className="text-center rounded-full p-7 bg-white">
              <h4 className="font-bold text-lg text-gray-950">65%</h4>
              <p className="font-bold text-xs text-slate-500">
                Total New <br />
                Customers
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            id="circle-svg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="85" cy="78" r="65" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OverviewData;
