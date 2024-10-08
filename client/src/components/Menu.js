import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="flex w-full items-center justify-between px-7 py-3 text-sm bg-black fixed top-0 z-50"> {/* Changed text-lg to text-sm */}
      <div className="flex">
        <Link to="/">
          <h1 className="text-xl gradient-text font-extrabold font-roboto text-white">LeetCoach</h1> {/* Changed text-2xl to text-xl */}
        </Link>
      </div>
      <div className="flex font-medium text-white/80">
        <Link to="https://github.com/mlekhi/leetcoach">
          <h1 className="mx-4 pt-3 hover:border-b-2 border-blue-600 hover:text-blue-600">Github</h1> {/* Adjusted spacing */}
        </Link>

        <div className="border-[0.5px] mt-3 h-8 border-white/25"></div>

        <Link to="https://devpost.com/">
          <h1 className="mx-4 pt-3 hover:border-b-2 border-blue-600 hover:text-blue-600">Devpost</h1> {/* Adjusted spacing */}
        </Link>

        {/* Auth Button */}
        <ul className="flex items-center justify-center px-4 py- rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-neon-blue hover:shadow-neon-purple transition-all duration-300 ease-in-out transform hover:scale-105">
          {isAuthenticated ? (
            <li onClick={() => logout({ returnTo: window.location.origin })} className="cursor-pointer">Log Out</li>
          ) : (
            <li onClick={() => loginWithRedirect()} className="cursor-pointer">Log In</li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
