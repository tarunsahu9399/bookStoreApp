import React, { useState, useEffect } from "react";
import bannerImg from "../../Images/bannerImg.png";
import bannerAniLight from "../../Images/bannerAni.gif";
import bannerAniDark from "../../Images/bannerAniDark.gif";

function Banner() {
  // console.log("From Banner", localStorage);
  // const [mode, setMode] = useState("light");
  // const handleMode = () => {
  //   if (localStorage.theme === "light") {
  //     setMode("light");
  //     return bannerAniLight;
  //   } else {
  //     setMode("dark");
  //     return bannerAniDark;
  //   }
  // };

  return (
    <>
      <div className="w-screen h-screen container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row my-10 ">
        <div className="w-full md:w-1/2 md:mt-32 mt-12 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-teal-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis dicta dolore, et veritatis consequuntur officiis,
              voluptatibus tenetur dolores nostrum id suscipit! Inventore iste
              odio natus!{" "}
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="I am intrested in..."
              />
            </label>
          </div>
          <button className="btn btn-secondary bg-teal-500 border-teal-500 hover:bg-white hover:border-teal-500 hover:text-teal-500 mt-6">
            Search
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center ">
          <img src={bannerAniLight} className="  scale-75  " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
