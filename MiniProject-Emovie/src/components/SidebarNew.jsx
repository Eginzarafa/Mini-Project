import React from "react";

export default function SidebarNew() {
  return (
    <div className="flex flex-col flex-grow p-4 overflow-auto border-r">
      <a
        className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300 bg-gray-300"
        href="#"
      >
        <span className="leading-none">Dashboard</span>
      </a>

      <a
        className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
        href="/movie"
      >
        <span className="leading-none">Movie</span>
      </a>

      <a
        className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
        href="#"
      >
        <span className="leading-none">menu 4</span>
      </a>

      <a
        className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
        href="#"
      >
        <span className="leading-none">menu 5</span>
      </a>

      <a
        className="flex text-white items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-red-700 rounded-full hover:bg-red-800"
        href="#"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
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
