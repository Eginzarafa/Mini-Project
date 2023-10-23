import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
const DetailMovie = () => {
  const location = useLocation();
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6530e5876c756603295f4712.mockapi.io/emovie/movie/" + id
        );

        setData(response.data);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Detail Movie</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={data.image} alt={data.title} className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{data.title}</h2>
            <p>
              <span className="font-semibold">Genre:</span> {data.genre}
            </p>
            <p>
              <span className="font-semibold">Tahun Rilis:</span> {data.year}
            </p>
            <p>
              <span className="font-semibold">Deskripsi:</span>{" "}
              {data.description}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Komentar</h3>
          <form onSubmit={handleCommentSubmit}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tambahkan komentar"
                className="w-full border border-gray-300 rounded p-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2"
              >
                Kirim
              </button>
            </div>
          </form>
          <ul className="mt-2">
            {comments.map((comment, index) => (
              <li key={index} className="mb-2">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailMovie;
