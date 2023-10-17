import React from "react";
import ProductSellHeader from "./ProductSellHeader";
import Products from "./Products";

const ProductsSell = () => {
  return (
    <div className="w-full rounded-xl bg-white p-5 space-y-5">
      <ProductSellHeader />
      <Products />
    </div>
  );
};

export default ProductsSell;
