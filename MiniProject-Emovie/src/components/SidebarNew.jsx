import React from "react";
import { FaFilm, FaTv, FaComments, FaRobot, FaCog } from "react-icons/fa";

export default function SidebarNew() {
  return (
    <div className="flex flex-col w-64 p-4 overflow-y-auto border-r bg-black text-white">
      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200"
        href="/home"
      >
        <FaFilm className="text-2xl mr-2" />
        <span className="leading-none">Dashboard</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200"
        href="/movie"
      >
        <FaFilm className="text-2xl mr-2" />
        <span className="leading-none">Movie</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200"
        href="/series"
      >
        <FaFilm className="text-2xl mr-2" />
        <span className="leading-none">Series</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200"
        href="/rating"
      >
        <FaComments className="text-2xl mr-2" />
        <span className="leading-none">Reviews</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200"
        href="/openai"
      >
        <FaRobot className="text-2xl mr-2" />
        <span className="leading-none">OpenAI</span>
      </a>

      <div className="flex items-center h-10 px-4 text-sm font-medium mt-auto rounded-md hover:bg-slate-200">
        <FaCog className="text-2xl mr-2" />
        <span className="leading-none">Settings</span>
      </div>

      <a
        className="flex items-center h-10 px-4 mt-4 text-sm font-medium text-white bg-red-700 rounded-full hover:bg-red-800"
        href="/logout"
      >
        <svg
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-3 leading-none">Log Out</span>
      </a>
    </div>
  );
}
