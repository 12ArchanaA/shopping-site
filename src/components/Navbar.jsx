import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shopping-site">Shop</Link>
        <Link to="/shopping-site/cart">
          <ShoppingCart height="30px" width="30px" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
