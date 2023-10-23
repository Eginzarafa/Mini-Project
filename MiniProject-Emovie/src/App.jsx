import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/dashboard";
import Sidebar from "./components/Sidebar";
import DetailMovie from "./components/Detail";
import Movie from "./pages/movie";
import Test from "./pages/test";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Movie" element={<Movie />} />
        <Route
          path="/detail/:id"
          element={<DetailMovie selectedMovie={selectedMovie} />}
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
