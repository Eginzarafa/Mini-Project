import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (username === "eginzarafa" && password === "abc12345") {
      setIsAuthenticated(true);
    } else {
      alert("Username or password is incorrect.");
    }
  };

  if (isAuthenticated) {
    window.location.href = "/home";
  }

  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center relative py-50 min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/rows-red-seats-theater_53876-64710.jpg?w=2000&t=st=1697698224~exp=1697698824~hmac=928e59b55495ab78921745e13d8ada30cfe2d1876bff7e39d99fcbfaca25cd9b")',
          background:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(0.5, 0, 0, 1)), url('https://img.freepik.com/free-photo/rows-red-seats-theater_53876-64710.jpg?w=2000&t=st=1697698224~exp=1697698824~hmac=928e59b55495ab78921745e13d8ada30cfe2d1876bff7e39d99fcbfaca25cd9b')",
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
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
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
