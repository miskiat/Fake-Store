import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="acme" src="/public/acme.svg" />

      <h4>ACME STORE </h4>

      <div>All Shirts Stickers</div>
      <div className="search">
        <input placeholder="Search for Products..." />
        <img className="search-box" src="/public/search.svg" />
      </div>
      <p className="flex-grow"></p>
      <div>
        <img className="cart" src="/public/cart.svg" />
      </div>
    </div>
  );
};

export default Navbar;
