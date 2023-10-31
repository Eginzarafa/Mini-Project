import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import SidebarNew from "../components/SidebarNew";

const Rating = () => {
  const [ratingData, setRatingData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6530e5876c756603295f4712.mockapi.io/emovie/rating"
        );

        setRatingData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://6530e5876c756603295f4712.mockapi.io/emovie/rating/${id}`)
      .then((response) => {
        // Setelah penghapusan berhasil, perbarui data rating
        setRatingData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  return (
    <div>
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex h-screen bg-gray-100">
        {showMenu && <SidebarNew />}
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-x-auto bg-yellow-950">
            <div className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4 text-center text-white">
                Data Rating
              </h2>
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2">Username</th>
                      <th className="px-4 py-2">Movie</th>
                      <th className="px-4 py-2">Review</th>
                      <th className="px-4 py-2">Rating</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ratingData.map((rating) => (
                      <tr
                        key={rating.id}
                        className="hover:bg-gray-100 bg-white"
                      >
                        <td className="border px-4 py-2">{rating.username}</td>
                        <td className="border px-4 py-2">{rating.title}</td>
                        <td className="border px-4 py-2">{rating.review}</td>
                        <td className="border px-4 py-2">{rating.rating}</td>
                        <td className="border px-4 py-2">
                          <button
                            onClick={() => handleDelete(rating.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 "
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rating;
