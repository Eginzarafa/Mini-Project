import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarNew from "../components/SidebarNew";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SettingPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  return (
    <div>
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex h-screen bg-gray-100">
        {showMenu && <SidebarNew />}

        <div className="w-full flex justify-center items-center bg-yellow-800 ">
          <div className="max-w-md w-full bg-yellow-800 p-6  ">
            <main className="flex-1 overflow-x-hidden overflow-y-auto ">
              <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-black">Settings</h1>

                <div className="p-6  max-w-md w-full rounded-lg shadow-md bg-white">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 ">
                      Change Username
                    </h2>
                    <a
                      className="flex items-center h-10 px-4 mt-4 text-sm font-medium bg-yellow-700 rounded-full hover-bg-yellow-800"
                      href="/username"
                    >
                      <span className="leading-none">Username</span>
                    </a>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 ">
                      Change Password
                    </h2>
                    <a
                      className="flex items-center h-10 px-4 mt-4 text-sm font-medium bg-yellow-700 rounded-full hover-bg-yellow-800"
                      href="/password"
                    >
                      <span className="leading-none">Password</span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingPage;
