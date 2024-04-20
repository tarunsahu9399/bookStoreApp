import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx";

function NewArrival() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filterData = list.filter((data) => data.arrival === "new");

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="items-center justify-center text-center">
          <h1 className="font-bold text-2xl pb-2 text-teal-500">
            New Arrival !!!
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nam quibusdam architecto recusandae itaque sint blanditiis,
            laboriosam quia, nemo id facilis possimus ducimus illum ea animi,
            error quas temporibus iste?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
