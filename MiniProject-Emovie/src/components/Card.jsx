import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const MovieCard = ({
  id,
  title,
  imageUrl,
  rating,
  genre,
  deskripsi,
  kategori,
}) => {
  const nav = useNavigate();

  const trimDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substring(0, maxLength) + "...";
    }
  };

  const handleDetailClick = () => {
    nav(`/detail/${id}/${rating}`);
  };

  const handleDetailSeriesClick = () => {
    nav(`/detailSeries/${id}/${rating}`);
  };

  return (
    <div className=" max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-300 text-white">
      <img src={imageUrl} alt={title} className="w-full h-max object-cover" />
      <div className="px-6 py-4 h-72">
        <div className=" text-sm text-gray-400">{genre}</div>
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <div className="text-xl mb-2 text-gray-100">
          {trimDescription(deskripsi, 75)}
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            Play
          </button>
          <button
            onClick={
              kategori == "movie" ? handleDetailClick : handleDetailSeriesClick
            }
            className="bg-gray-200 hover-bg-gray-600 text-black font-bold py-2 px-4 rounded-full"
          >
            Detail
          </button>
          <button className="bg-yellow-950 font-bold py-2 px-4 rounded-full">
            <AiOutlineHeart className="text-white text-2xl" />
          </button>
        </div>
        <p className="text-gray-100 text-base mt-4">Rating: {rating} / 10</p>
      </div>
    </div>
  );
};

export default MovieCard;
