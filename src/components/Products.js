import React from "react";
import pOne from "../assests/p1.avif";
import pTwo from "../assests/p2.jpeg";

const products = [
  {
    image: pOne,
    title: "Abstract 3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    stock: "32",
    price: "45.99",
    sales: "20",
  },
  {
    image: pTwo,
    title: "Sarphens Illustrations",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    stock: "32",
    price: "45.99",
    sales: "20",
  },
];

const Products = () => {
  return (
    <div className="w-full h-full p-0 space-y-3">
      <div className="flex justify-between">
        <p className="font-bold text-xs text-slate-400">Product Name</p>
        <div className="flex space-x-16">
          <p className="font-bold text-xs text-slate-400">Stock</p>
          <p className="font-bold text-xs text-slate-400">Price</p>
          <p className="font-bold text-xs text-slate-400">Total Sales</p>
        </div>
      </div>
      <hr />
      {products &&
        products.map((currItem, index) => {
          return (
            <div className="w-full flex justify-between" key={index}>
              <div className="flex items-center space-x-2">
                <img
                  src={currItem.image}
                  alt="..."
                  className="w-[60px] h-[36px] object-cover rounded"
                />
                <div>
                  <h4 className="font-bold text-base text-gray-900">
                    {currItem.title}
                  </h4>
                  <p className="font-bold text-xs text-slate-400">
                    {currItem.desc.slice(0, 50)}
                  </p>
                </div>
              </div>
              <div className="flex">
                <p className="font-bold text-sm text-gray-600 mr-12">
                  {currItem.stock} in stock
                </p>
                <p className="font-bold text-sm text-gray-900 mr-16">
                  ${currItem.price}
                </p>
                <p className="font-bold text-sm text-gray-600 mr-5">
                  {currItem.sales}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
