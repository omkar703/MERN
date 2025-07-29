import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-5 px-10text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl">omkar</h2>
      <div className="flex gap-8 justify-center items-center">
        <h4 className="text-xl">home</h4>
        <h4 className="text-xl">contact me</h4>
        <h4 className="text-xl">services</h4>
        <h4 className="text-xl">your account</h4>
      </div>
    </nav>
  );
};

export default Navbar;
