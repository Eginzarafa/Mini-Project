import React from "react";
import Logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/Ti";

function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="w-8 h-8 rounded-full" />;
}

function Header({ onClick }) {
  return (
    <header className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-10 h-10 mr-2" src={Logo} alt="Logo" />
        <h1 className="text-white text-2xl font-bold">E-Movie</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Cari..."
          className="border border-gray-300 p-2 rounded-l-md"
        />
        <button className="bg-yellow-700 text-white p-2 rounded-r-md">
          Cari
        </button>
      </div>
      <div className="ml-4">
        <div className="flex">
          <button className="text-white" onClick={onClick}>
            <TiThMenu />
          </button>

          <Avatar src="/path-to-your-profile-image.png" alt="Profil" />
        </div>
      </div>
    </header>
  );
}

export default Header;
