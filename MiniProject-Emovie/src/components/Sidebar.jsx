import React from "react";
import {
  FaUser,
  FaFilm,
  FaTv,
  FaList,
  FaComments,
  FaRobot,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({ user, onLogout }) {
  return (
    <div className="bg-blue-900 text-white h-screen w-1/5 p-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        {user && (
          <div className="flex items-center space-x-2">
            <FaUser className="text-2xl" />
            <p>{user.username}</p>
          </div>
        )}
        <nav>
          <ul className="mt-8">
            <li className="mb-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-lg hover-text-blue-400"
              >
                <FaFilm className="text-2xl" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/movies"
                className="flex items-center space-x-2 text-lg hover-text-blue-400"
              >
                <FaFilm className="text-2xl" />
                <span>Movies</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/series"
                className="flex items-center space-x-2 text-lg hover-text-blue-400"
              >
                <FaTv className="text-2xl" />
                <span>Series</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/genres"
                className="flex items-center space-x-2 text-lg hover-text-blue-400"
              >
                <FaList className="text-2xl" />
                <span>Genres</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/reviews"
                className="flex items-center space-x-2 text-lg hover-text-blue-400"
              >
                <FaComments className="text-2xl" />
                <span>Reviews</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/openai"
                className="flex items-center space-x-2 text-lg hover-text-blue-400"
              >
                <FaRobot className="text-2xl" />
                <span>OpenAI</span>
              </Link>
            </li>
          </ul>
        </nav>
        {user && (
          <button
            onClick={onLogout}
            className="bg-red-500 hover-bg-red-600 text-lg text-white rounded-lg py-2 px-6"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
