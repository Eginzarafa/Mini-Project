import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarNew from "../components/SidebarNew";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Dashboard = () => {
  const ratingApiUrl =
    "https://6530e5876c756603295f4712.mockapi.io/emovie/rating/";
  const movieApiUrl =
    "https://6530e5876c756603295f4712.mockapi.io/emovie/movie";
  const seriesApiUrl =
    "https://65388890a543859d1bb18ac4.mockapi.io/emovie2/series";

  const [currentImage, setCurrentImage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

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

  return (
    <div>
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex h-screen">
        {showMenu && <SidebarNew />}

        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 bg-yellow-950">
          <div className="flex flex-wrap p-2">
            {movies.map((movie, i) => {
              const rating = findRating(movie.id, false);
              return (
                <div className="m-3" key={i}>
                  <MovieCard
                    id={movie.id}
                    genre={movie.genre}
                    title={movie.title}
                    deskripsi={movie.description}
                    imageUrl={movie.image}
                    rating={rating}
                    kategori={"movie"}
                  />
                </div>
              );
            })}

            {series.map((item, i) => {
              const rating = findRating(item.id, false);

              return (
                <div className="m-3" key={i}>
                  <MovieCard
                    id={item.id}
                    genre={item.genre}
                    title={item.title}
                    deskripsi={item.description}
                    imageUrl={item.image}
                    rating={rating}
                    kategori={"series"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
