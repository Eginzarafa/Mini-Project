import React from "react";

const CarouselItem = ({ image }) => {
  console.log(image);
  return (
    <div>
      <div className="shadow slide-item transition-all">
        <img src={image} alt="image" className=" object-cover h-52 rounded" />
      </div>
    </div>
  );
};

export default CarouselItem;
