import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="w-full p-2 rounded-md border-2 border-gray-500 focus:border-blue-500"
        />
      </div>
      <div>
        <img
          src="https://www.w3schools.com/w3images/avatar.jpg"
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="text-2xl font-bold underline text-blue-500">Omkar</h1>
        <p className="text-sm font-bold underline text-blue-500">
          Web Developer
        </p>
        <p className="text-sm font-bold underline text-blue-500">React.js</p>
        <p className="text-sm font-bold underline text-blue-500">
          Tailwind CSS
        </p>
        <p className="text-sm font-bold underline text-blue-500">HTML</p>
        <p className="text-sm font-bold underline text-blue-500">CSS</p>
        <p className="text-sm font-bold underline text-blue-500">Javascript</p>
        <p className="text-sm font-bold underline text-blue-500">Node.js</p>

        <Link to="/about">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact
          </button>
        </Link>
        <Link to="/home">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
