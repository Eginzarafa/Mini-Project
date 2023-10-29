import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import SidebarNew from "../SidebarNew";

const UsernameForm = ({}) => {
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const apiUrl = "https://api-users-belajar.web-siap.online/api/update-users";
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setUsername(localStorage.getItem("username"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));

    setNewRole(localStorage.getItem("role"));
  }, []);

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  const updateProfile = () => {
    const data = {
      id: localStorage.getItem("id"),
      username: newUsername,
      name: newName,
      password: newPassword,
      email: newEmail,
      role: newRole,
    };
    axios
      .post(apiUrl, data)
      .then((response) => {
        setSuccessMessage("Profil berhasil diperbarui.");
      })
      .catch((error) => {
        setMessage("Gagal memperbarui profil.");
      });
  };

  return (
    <div className="relative bg-yellow-800">
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex h-screen">
        {showMenu && <SidebarNew />}
        <div className="w-full flex justify-center items-center ">
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Edit Profile
            </h2>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Current Username: {username}
              </label>
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

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Current Name: {name}
              </label>
              <label className="block text-gray-600 font-semibold">
                New Name:
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Current Password: {password}
              </label>
              <label className="block text-gray-600 font-semibold">
                New Password:
              </label>
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Current Email: {email}
              </label>
              <label className="block text-gray-600 font-semibold">
                New Email:
              </label>
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Role :
              </label>
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                disabled
              />
            </div>

            <button
              onClick={updateProfile}
              className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover-bg-yellow-800 w-full"
            >
              Save Profile
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
