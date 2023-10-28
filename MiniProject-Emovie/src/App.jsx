import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/dashboard";
import DetailMovie from "./components/Detail";
import Movie from "./pages/movie";
import OpenAi from "./pages/openAI";
import Rating from "./pages/rating";
import Series from "./pages/series";
import DetailSeries from "./components/DetailSeries";
import SettingPage from "./pages/settings";
import UsernameForm from "./components/settings/username";
import PasswordForm from "./components/settings/password";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeries, setSelectedSeselectedSeries] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/series" element={<Series />} />
        <Route
          path="/detail/:id/:ratingValue"
          element={<DetailMovie selectedMovie={selectedMovie} />}
        />
        <Route
          path="/detailSeries/:id/:ratingValue"
          element={<DetailSeries selectedSeries={selectedSeries} />}
        />
        <Route path="/openai" element={<OpenAi />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/username" element={<UsernameForm />} />
        <Route path="/password" element={<PasswordForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
