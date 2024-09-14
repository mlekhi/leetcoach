import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-7 py-3 text-lg bg-transparent fixed top-0 z-50"> 
    <div className="flex">
      <Link to="/"> 
        <h1 className="text-2xl gradient-text font-extrabold font-roboto text-white">LeetCoach</h1>
      </Link> 
      </div>
      <div className="flex font-medium text-white/80">
      <Link to="https://github.com/mlekhi/leetcoach">
        <h1 className="mx-6 pt-3 hover:border-b-2 border-blue-600 hover:text-blue-600">Github</h1>
      </Link>

      <div className="border-[0.5px] mt-3 h-8 border-white/25"></div>
        
      <Link to="https://devpost.com/">
        <h1 className="mx-6 pt-3 hover:border-b-2 border-blue-600 hover:text-blue-600">Devpost</h1>
      </Link>

      <ul className="flex p-3 px-8 rounded-full text-white bg-blue-600 font-semibold hover-effect">
        <Link to="/main">
          <li className="">Try Now</li>
        </Link>
        {/* Add more navigation items as needed */}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;