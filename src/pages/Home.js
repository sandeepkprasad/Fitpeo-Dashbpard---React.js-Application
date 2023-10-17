import React from "react";
import Header from "../components/Header";
import TotalData from "../components/TotalData";
import OverviewData from "../components/OverviewData";
import ProductsSell from "../components/ProductsSell";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <TotalData />
      <OverviewData />
      <ProductsSell />
    </div>
  );
};

export default Home;
