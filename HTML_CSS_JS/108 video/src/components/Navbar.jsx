import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  useEffect(() => {
    alert("color was changed");
  }, [color]);

  return <div>I navbar and I am {color}</div>;
};

export default Navbar;
