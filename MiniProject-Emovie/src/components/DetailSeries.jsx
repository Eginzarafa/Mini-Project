import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const DetailSeries = () => {
  const location = useLocation();
  const { id, ratingValue } = useParams();
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://65388890a543859d1bb18ac4.mockapi.io/emovie2/series/${id}`
        );

        setData(response.data);
        setTitle(response.data.title);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = () => {
    if (!username || !title || !review || !rating) {
      setMessage("Mohon isi semua kolom.");
      return;
    }

    const data = {
      username: username,
      title: title,
      review: review,
      rating: rating,
      movieID: id,
    };

    axios
      .post(`https://6530e5876c756603295f4712.mockapi.io/emovie/rating/`, data)
      .then((response) => {
        setMessage("Rating berhasil ditambahkan.");
        setUsername("");
        setTitle("");
        setReview("");
        setRating("");
      })
      .catch((error) => {
        setMessage("Terjadi kesalahan saat menambahkan rating.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-yellow-600">
      <Header />
      <div className="max-w-screen-lg mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-4">Detail Series</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-auto border rounded-3xl"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{data.title}</h2>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="font-semibold">Genre:</td>
                  <td>{data.genre}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Tahun Rilis:</td>
                  <td>{data.year}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Rating:</td>
                  <td>{ratingValue}/10</td>{" "}
                </tr>
                <tr>
                  <td className="font-semibold">Deskripsi:</td>
                  <td>{data.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="container mx-auto mt-20 p-5 bg-black  rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-white flex justify-center item-center">
            Input Rating Film
          </h2>
          {message && <p className="text-white mb-4">{message}</p>}
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Username:
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Review:
              </label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                rows="4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Rating:
              </label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-yellow-700 text-black px-4 py-2 rounded-lg hover-bg-yellow-900"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailSeries;
