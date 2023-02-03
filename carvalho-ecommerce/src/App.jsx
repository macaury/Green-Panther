import React from "react";

import Navbar from "./components/Nav_bar.jsx";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Products from "./components/ProductsPop";
import SendTypes from "./components/SendTypes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Brands />
      <Categories />
      <SendTypes />
      <Products />
      <Footer />
    </>
  );
}

export default App;
