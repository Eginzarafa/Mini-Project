import React, { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "../layouts/modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import SidebarNew from "../components/SidebarNew";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const apiUrl = "https://6530e5876c756603295f4712.mockapi.io/emovie/movie";
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleEdit = (id) => {
    const movieToEdit = movies.find((movie) => movie.id === id);
    if (movieToEdit) {
      setTitle(movieToEdit.title);
      setGenre(movieToEdit.genre);
      setYear(movieToEdit.year);
      setDescription(movieToEdit.description);
      setImage(movieToEdit.image);
      setId(movieToEdit.id);
      setShowModal(true);
    }
  };

  const handleDelete = (id) => {
    const validate = window.confirm(
      "Apakah Anda yakin ingin menghapus item ini id = " + id
    );

    if (validate) {
      axios
        .delete(`${apiUrl}/${id}`)
        .then(() => {
          fetchData();
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
        });
    }
  };

  const postData = () => {
    const data = {
      title: title,
      genre: genre,
      year: year,
      description: description,
      image: image,
    };

    if (id) {
      axios
        .put(`${apiUrl}/${id}`, data)
        .then((res) => {
          fetchData();
          alert("Berhasil diperbarui");
          setShowModal(false);
        })
        .catch((er) => {
          alert("Gagal memperbarui");
          console.log(er);
        });
    } else {
      axios
        .post(apiUrl, data)
        .then((res) => {
          fetchData();
          alert("Berhasil ditambahkan");
          setShowModal(false);
        })
        .catch((er) => {
          alert("Gagal menambahkan");
          console.log(er);
        });
    }
  };

  const ShowMenu = (bol) => {
    setShowMenu(bol === true ? false : true);
  };

  return (
    <div className="relative">
      <Header onClick={() => ShowMenu(showMenu)} />
      <div className="flex">
        {showMenu && <SidebarNew />}
        <div className="w-full p-4">
          <h1 className="text-3xl font-bold mb-4 flex justify-center items-center">
            Movie
          </h1>
          <button
            className="px-8 bg-yellow-700 text-white text-lg font-bold py-2 rounded-md flex"
            onClick={() => {
              setShowModal(true);
              setTitle("");
              setGenre("");
              setYear("");
              setDescription("");
              setImage("");
              setId(null);
            }}
          >
            <HiPlus className="text-lg mr-2" />
            ADD New Movies
          </button>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
        </div>
      </div>
      <Modal
        show_modal={showModal}
        onClick={() => setShowModal(false)}
        custom_class="lg:w-2/6"
        title={id ? "Edit Film" : "Tambah Film Baru"}
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label>Title</label>
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Genre</label>
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <label>Year</label>
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label>Image URL</label>
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Description</label>
            <input
              type="text"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 mt-2 mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="bg-black p-1 text-white rounded-lg"
            onClick={postData}
          >
            {id ? "Simpan Perubahan" : "Simpan"}{" "}
          </button>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

export default Movie;
