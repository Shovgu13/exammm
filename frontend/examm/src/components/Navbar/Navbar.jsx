import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            {" "}
            <Link  className="link" to="/"  >Home </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/about" > About </Link>{" "}
          </li>
          <li>
            {" "}
            <Link  className="link" to="/detail" > Detail </Link>{" "}
          </li>
          <li>
            {" "}
            <Link  className="link" to="/wishlist" > Wishlist</Link>{" "}
          </li>
          <li>
            {" "}
            <Link  className="link" to="/basket" >Basket </Link>{" "}
          </li>
          <li>
            {" "}
            <Link  className="link" to="/admin" >Admin </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
