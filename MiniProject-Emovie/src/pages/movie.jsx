import React, { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "../layouts/modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const apiUrl = "https://6530e5876c756603295f4712.mockapi.io/emovie/movie";
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEdit = (id) => {
    window.location.href = `/edit/${id}`;
  };

  const handleDelete = (id) => {
    const validate = confirm(
      "Apakah Anda yakin ingin menghapus item ini? id=" + id
    );

    if (validate) {
      fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error fetching data:", error));
        })
        .catch((error) => console.error("Error deleting data:", error));
    }
  };

  const postData = () => {
    const data = {
      title: "title 1",
      genre: "genre 1",
      year: "year 1",
      description: "description 1",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/616.jpg",
      id: "1",
    };

    // Kirim data ke API dengan menggunakan axios
    axios
      .post(apiUrl, data)
      .then((res) => {
        // Setelah berhasil, perbarui data film
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setMovies(data))
          .catch((error) => console.error("Error fetching data:", error));

        alert("success");
        setShowModal(false);
      })
      .catch((er) => {
        alert("gagal");
        console.log(er);
      });
  };

  return (
    <div className="relative">
      <Header />

      {showModal && (
        <div className="bg-modal-backdrop absolute top-0 left-0 w-full h-full opacity-50 backdrop-blur-3xl z-10"></div>
      )}

      <h1 className="text-3xl font-bold mb-4 flex justify-center items-center">
        <div>
          <button
            className="px-8 float-left bg-yellow-700 text-white text-lg font-bold py-2 rounded-md flex"
            onClick={() => setShowModal(true)} // Menampilkan modal saat tombol diklik
          >
            <HiPlus className="text-lg mr-2" />
            ADD New Movies
          </button>
        </div>
        Create Movie
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr
                key={movie.id}
                className={
                  index % 2 === 0
                    ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    : "border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                }
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {movie.id}
                </th>
                <td className="px-6 py-4">{movie.title}</td>
                <td className="px-6 py-4">{movie.genre}</td>
                <td className="px-6 py-4">{movie.year}</td>
                <td className="px-6 py-4">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{ width: "100px" }}
                  />
                </td>
                <td className="px-6 py-4">{movie.description}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    onClick={() => handleEdit(movie.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleDelete(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        // width={800}
        // show_modal={showModal}
        // onClose={() => setShowModal(false)}
        show_modal={showModal}
        onClick={() => setShowModal(false)}
        custom_class="lg:w-2/6"
        title="ADD New Movie"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label>Title</label>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
              placeholder=""
            />

            <label>Genre</label>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
            />
            <label>Year</label>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
            />
            <label>Image URL</label>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
            />
            <label>Description</label>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
            />
          </div>
          <button className="bg-black p-1 text-white rounded-lg"> Save </button>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default Movie;
