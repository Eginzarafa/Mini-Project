import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SidebarNew from "../../components/SidebarNew";

const PasswordForm = ({ onSuccess, onError }) => {
  const [Password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const apiUrl = "https://api-users-belajar.web-siap.online/api/update-users";

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  const updatePassword = () => {
    if (newPassword === confirmPassword) {
      const data = {
        password: Password,
        new_password: newPassword,
      };

      axios
        .put(apiUrl, data)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("password", newPassword);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.info_user.role);
          setSuccessMessage("Password berhasil diperbarui.");
          setNewPassword("");
          setConfirmPassword("");
          console.log(res.data);
        })
        .catch((error) => {
          console.error("Error updating password:", error);
          onError("Gagal memperbarui password.");
        });
    } else {
      setMessage("Password baru harus sesuai dengan konfirmasi.");
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
              Change Password
            </h2>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Current Password :
              </label>
              <input
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                New Password:
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Confirm Password :
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button
              onClick={updatePassword}
              className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 w-full"
            >
              Save Password
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

export default PasswordForm;
