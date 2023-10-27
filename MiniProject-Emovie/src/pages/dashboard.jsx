import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarNew from "../components/SidebarNew";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/Card";
import Carousel from "../components/Carousel";

const Dashboard = () => {
  const ratingApiUrl =
    "https://6530e5876c756603295f4712.mockapi.io/emovie/rating/";
  const movieApiUrl =
    "https://6530e5876c756603295f4712.mockapi.io/emovie/movie";
  const seriesApiUrl =
    "https://65388890a543859d1bb18ac4.mockapi.io/emovie2/series";

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovieData = async () => {
    try {
      const moviesResponse = await axios.get(movieApiUrl);
      setMovies(moviesResponse.data);
      console.log("Movies Data:", moviesResponse);
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };

  const fetchSeriesData = async () => {
    try {
      const seriesResponse = await axios.get(seriesApiUrl);
      setSeries(seriesResponse.data);
      console.log("series Data:", seriesResponse);
    } catch (error) {
      console.log("Error fetching series:", error);
    }
  };

  const fetchRatingData = async () => {
    try {
      const ratingsResponse = await axios.get(ratingApiUrl);
      setRatings(ratingsResponse.data);
      console.log("Data Rating:", ratingsResponse);
    } catch (error) {
      console.log("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
    fetchRatingData();
    fetchSeriesData();
  }, []);

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  const findRating = (id, isSeries) => {
    var value = 0;
    ratings
      .filter((f) => f.movieID == id)
      .map((items, i) => {
        console.log(items.rating);
        value = items.rating;
      });
    return value;
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const performSearch = () => {
    const results = movies.concat(series).filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        (item.year && item.year.includes(searchText)) ||
        item.genre.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setSearchResults(results);
  };

  useEffect(() => {
    performSearch();
  }, [searchText]);

  return (
    <div>
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex h-screen">
        {showMenu && <SidebarNew />}

        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-yellow-950">
          <div className="flex items-center justify-center p-2">
            <h1 className="text-white font-bold text-3xl font-mono">
              E - Movie Best Movie Of The Year
            </h1>
          </div>
          <div className="h-96 w-screen flex justify-center items-center  ">
            <div className="container max-auto">
              <Carousel />
            </div>
          </div>
          <div className="flex items-center justify-end mr-12">
            <input
              type="text"
              placeholder="Cari..."
              className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={searchText}
              onChange={handleSearchChange}
            />
            <button
              className="bg-yellow-700 text-white p-2 rounded-md ml-2"
              onClick={performSearch}
            >
              Cari
            </button>
          </div>
          <div className="flex items-start justify-start p-2">
            <h1 className="text-gray-200 font-bold text-3xl font-serif ml-6">
              Movie & Series
            </h1>
          </div>
          <div className="flex flex-wrap p-2 ml-3">
            {(searchText ? searchResults : movies.concat(series)).map(
              (item, i) => {
                const rating = findRating(
                  item.id,
                  item.hasOwnProperty("description")
                );
                return (
                  <div className="m-3" key={i}>
                    <MovieCard
                      id={item.id}
                      genre={item.genre}
                      title={item.title}
                      deskripsi={item.description}
                      imageUrl={item.image}
                      rating={rating}
                      kategori={
                        item.hasOwnProperty("description") ? "series" : "movie"
                      }
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
