import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="side-options">
        <div>
          <p className="top">Collections</p>
          <p>All</p>
          <p>Men's clothing</p>
          <p>Woman's clothing</p>
          <p>Jewelery</p>
          <p>Electronics</p>
        </div>
        <div>
          <p className="top">Sorts</p>
          <p>Relevance</p>
          <p>Trending</p>
          <p>Latest arrivals</p>
          <p>Price: Low to high</p>
          <p>Price: High to low</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
