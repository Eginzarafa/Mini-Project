import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarNew from "../components/SidebarNew";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Dashboard = () => {
  const apiUrl = "https://6530e5876c756603295f4712.mockapi.io/emovie/movie";
  const [images] = useState([
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=170667a&w=0&k=20&c=vKqLcyX0Qlrh8A351AA3-h2s5P46CZjh8JR6_QyV-D4=",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]);

  const [currentImage, setCurrentImage] = useState(0);
  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6530e5876c756603295f4712.mockapi.io/emovie/movie"
        );

        setData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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

  return (
    <div>
      <div className="relative">
        <Header onClick={() => ShowMenu(showMenu)} />

        {showMenu ? <SidebarNew /> : ""}
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src={
                "https://images.tokopedia.net/img/KRMmCm/2023/7/20/eceeb7f7-8472-4ce3-ba74-d877db579bc0.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://images.tokopedia.net/img/KRMmCm/2023/7/20/eceeb7f7-8472-4ce3-ba74-d877db579bc0.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://images.tokopedia.net/img/KRMmCm/2023/7/20/eceeb7f7-8472-4ce3-ba74-d877db579bc0.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://images.tokopedia.net/img/KRMmCm/2023/7/20/eceeb7f7-8472-4ce3-ba74-d877db579bc0.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://images.tokopedia.net/img/KRMmCm/2023/7/20/eceeb7f7-8472-4ce3-ba74-d877db579bc0.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://images.tokopedia.net/img/KRMmCm/2023/7/20/eceeb7f7-8472-4ce3-ba74-d877db579bc0.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-wrap p-2 ">
        {data.map((items, i) => {
          return (
            <div className="m-3">
              <MovieCard
                id={items.id}
                genre={items.genre}
                title={items.title}
                deskripsi={items.description}
                imageUrl={items.image}
                rating={8.5}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
