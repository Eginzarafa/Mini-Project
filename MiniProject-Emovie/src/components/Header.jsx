import React from "react";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ onClick }) {
  return (
    <header className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-white" onClick={onClick}>
          <GiHamburgerMenu className="text-xl" />
        </button>
      </div>
      <div className="ml-4 flex items-center">
        <img className="w-12 h-12 mr-2" src={Logo} alt="Logo" />
        <h1 className="text-white text-3xl font-bold">E-Movie</h1>
      </div>
    </header>
  );
}

export default Header;
