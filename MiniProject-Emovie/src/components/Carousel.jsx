import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "../components/CarouselItem";
import Img1 from "../assets/images.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Img4 from "../assets/img4.jpeg";
import Img5 from "../assets/img5.jpeg";

const Carousel = () => {
  const images = [Img1, Img2, Img3, Img4, Img5];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const renderImages = () =>
    images.map((image, index) => <CarouselItem key={index} image={image} />);
  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Slider {...settings}>{renderImages()}</Slider>
      </div>
    </div>
  );
};

export default Carousel;
