import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const MovieCard = ({ id, title, imageUrl, rating, genre, deskripsi }) => {
  const nav = useNavigate();

  const handleDetailClick = () => {
    nav(`/detail/${id}`);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-300">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="text-sm text-gray-500">{genre}</div>
        <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
        <div className="text-xl mb-2 text-gray-700">{deskripsi}</div>
        <div className="flex items-center space-x-2">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            Play
          </button>
          <button
            onClick={handleDetailClick}
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Detail
          </button>
          <button className="bg-white font-bold py-2 px-4 rounded-full">
            <AiOutlineHeart className="text-black text-2xl" />
          </button>
        </div>
        <p className="text-gray-700 text-base mt-4">Rating: {rating} / 10</p>
      </div>
    </div>
  );
};

export default MovieCard;
