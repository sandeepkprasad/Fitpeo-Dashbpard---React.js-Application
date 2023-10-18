import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <MobileSidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
