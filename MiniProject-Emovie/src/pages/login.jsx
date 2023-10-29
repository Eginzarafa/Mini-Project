import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios";
import BgLogin from "../assets/bglogin.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "https://api-users-belajar.web-siap.online/api/login";

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post(apiUrl, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("nama", res.data.info_user.role);
        localStorage.setItem("email", res.data.info_user.email);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.info_user.role);
        localStorage.setItem("id", res.data.info_user.id);
        if (res.data.info_user.role === "admin") {
          window.location.href = "/home";
        } else {
          window.location.href = "/home";
        }
      })
      .catch((er) => {
        alert("Login failed");
        console.log(er);
      });
  };

  if (isAuthenticated) {
    window.location.href = "/home";
  }

  return (
    <div>
      <div
        className="bg-cover bg-center relative py-50 min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${BgLogin})`,
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(${BgLogin})`,
        }}
      >
        <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold text-center mb-4 text-black">
            Sign In
          </h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border rounded-lg p-2"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-lg p-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#forgot"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
              <button
                type="button"
                onClick={handleLogin}
                className="bg-yellow-700 text-white rounded-lg px-4 py-2"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-4">
            <p className="text-sm text-center text-white">or sign in with</p>
            <div className="flex justify-center">
              <section className="md:w-1/2">
                <div className="flex items-center gap-5 pt-2">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-black hover:text-gray-400 text-3xl" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-black hover:text-gray-400 text-3xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-black hover:text-gray-400 text-3xl" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
