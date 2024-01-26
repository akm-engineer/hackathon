// Navbar.js

import React from 'react';
import {  FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navigator from './Navigator';

const Navbar = () => {
  return (
    <>
      <nav className="bg-purple-800 p-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-white text-lg font-bold">
          DigitalFlake
        </div>

        {/* Sign-in icon on the right with Link */}
        <Link to="/sign-up" className="text-white">
          <FaSignInAlt className="h-6 w-6 cursor-pointer" />
        </Link>
      </nav>
      <div className="flex p-4 bg-gray-200 flex-col ">
        <Navigator />
      </div>
    </>
  );
};

export default Navbar;
