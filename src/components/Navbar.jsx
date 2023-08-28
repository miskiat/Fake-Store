import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="acme" src="/public/acme.svg" />

      <h4>ACME STORE </h4>
      <div>All Shirts Stickers</div>
      <div>
        <input placeholder="Search for Products..." />
        <img className="search" src="/public/search.svg" />
      </div>
      <div>
        <img className="cart" src="/public/cart.svg" />
      </div>
    </div>
  );
};

export default Navbar;
