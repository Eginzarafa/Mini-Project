import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidebarNew from "../../components/SidebarNew";

const UsernameForm = ({ currentUsername, onSuccess, onError }) => {
  const [newUsername, setNewUsername] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  const updateUsername = () => {
    if (newUsername) {
      axios
        .put(`https://65388890a543859d1bb18ac4.mockapi.io/emovie2/users/1`, {
          username: newUsername,
        })
        .then((response) => {
          setSuccessMessage("Username berhasil diperbarui.");
          onSuccess(newUsername);
          setNewUsername("");
        })
        .catch((error) => {
          console.error("Error updating username:", error);
          onError("Gagal memperbarui username.");
        });
    } else {
      setMessage("Username baru tidak boleh kosong.");
    }
  };

  return (
    <div className="relative bg-yellow-800">
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex h-screen">
        {showMenu && <SidebarNew />}
        <div className="w-full flex justify-center items-center ">
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Change Username
            </h2>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                New Username:
              </label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button
              onClick={updateUsername}
              className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 w-full"
            >
              Save Username
            </button>

            {message && <p className="text-red-500 mt-4">{message}</p>}
            {successMessage && (
              <p className="text-green-500 mt-4">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UsernameForm;
