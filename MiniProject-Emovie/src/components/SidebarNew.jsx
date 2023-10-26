import React, { useEffect, useState } from "react";
import {
  FaFilm,
  FaTv,
  FaComments,
  FaRobot,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaHome,
} from "react-icons/fa";

export default function SidebarNew() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("https://65388890a543859d1bb18ac4.mockapi.io/emovie2/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.username);
        setRole(data.role);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col w-72 p-4 overflow-y-auto bg-black text-white">
      <div className="flex items-center flex-col text-center mb-4">
        <FaUserCircle className="text-3xl mb-2" />
        <span className="text-xl text-gray-400">{username}</span>
        <span className="text-sm text-gray-400 mt-1">{role}</span>
      </div>
      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200 border mb-4"
        href="/home"
      >
        <FaHome className="text-2xl mr-2" />
        <span className="leading-none">Dashboard</span>
      </a>
      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200 border mb-4"
        href="/movie"
      >
        <FaFilm className="text-2xl mr-2" />
        <span className="leading-none">Movie</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200 border mb-4"
        href="/series"
      >
        <FaTv className="text-2xl mr-2" />
        <span className="leading-none">Series</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200 border mb-4"
        href="/rating"
      >
        <FaComments className="text-2xl mr-2" />
        <span className="leading-none">Reviews</span>
      </a>

      <a
        className="flex items-center h-10 px-4 text-sm font-medium rounded-md hover:bg-slate-200 border mb-4"
        href="/openai"
      >
        <FaRobot className="text-2xl mr-2" />
        <span className="leading-none">OpenAI</span>
      </a>
      <a
        className="flex items-center h-10 px-4 text-sm font-medium mt-auto rounded-md hover:bg-slate-200 border "
        href="/setting"
      >
        <FaCog className="text-2xl mr-2" />
        <span className="leading-none">Settings</span>
      </a>

      <a
        className="flex items-center h-10 px-4 mt-4 text-sm font-medium bg-red-700 rounded-full hover:bg-red-800"
        href="/"
      >
        <FaSignOutAlt className="text-2xl mr-2" />
        <span className="leading-none">Log Out</span>
      </a>
    </div>
  );
}
