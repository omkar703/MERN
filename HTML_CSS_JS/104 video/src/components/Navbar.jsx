import React from "react";
import Footer from "./footer";
const Navbar = ({ logotext }) => {
  return (
    <div>
      <div className="logo">
        <h1>{logotext}</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default Navbar;
