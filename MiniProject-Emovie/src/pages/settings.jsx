import React, { useState } from "react";

const SettingPage = () => {
  const [username, setUsername] = useState("Username123");
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleUsernameChange = () => {
    if (newUsername) {
      // Kode untuk mengubah username di sini (misalnya, panggil API)
      setSuccessMessage("Username berhasil diubah.");
      setUsername(newUsername);
      setNewUsername("");
    } else {
      setMessage("Username baru tidak boleh kosong.");
    }
  };

  const handlePasswordChange = () => {
    if (newPassword && newPassword === confirmPassword) {
      // Kode untuk mengubah password di sini (misalnya, panggil API)
      setSuccessMessage("Password berhasil diubah.");
      setPassword(newPassword);
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setMessage("Password baru tidak boleh kosong dan harus sesuai.");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pengaturan Akun</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Ubah Username</h2>
          <p className="mb-4">Username saat ini: {username}</p>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">
              Username Baru:
            </label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button
            onClick={handleUsernameChange}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Simpan Perubahan
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Ubah Password</h2>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">
              Password Saat Ini:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">
              Password Baru:
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
              Konfirmasi Password Baru:
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button
            onClick={handlePasswordChange}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Simpan Perubahan Password
          </button>
        </div>
      </div>
      {message && <p className="text-red-500 mt-4">{message}</p>}
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
    </div>
  );
};

export default SettingPage;
