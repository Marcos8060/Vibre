import React from "react";
import image from "../images/7.png";
import image2 from "../images/4.png";
import image3 from "../images/8.png";
// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Navbar from "../Components/Navbar";
import Featured from "../Components/Featured";

const BodyOne: React.FC = () => {
  const options = {
    loop: true,
    center: false,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     center: false,
    //     nav: true,
    //   },
    //   600: {
    //     items: 1,
    //   },
    //   1000: {
    //     items: 1,
    //   },
    // },
    navText: [
      '<i class="bi bi-caret-left-fill"></i>',
      '<i class="bi bi-caret-right-fill"></i>',
    ],
  };
  return (
    <>
     <Navbar />
      <section className="py-12 px-16">
        <div className="flex gap-12">
          <div className="w-5/12 scale-80 hover:scale-95 ease-in duration-500 bg-gray rounded hover:shadow cursor-pointer transition ease-in-out delay-150 py-12 px-4">
            <h1 className="text-center text-2xl font-bold text-black">
              Introducing The latest Sneaker Collection
            </h1>
            <img className="h-70" src={image} alt="" />
          </div>
          <div className="w-7/12 h-70">
            <h1 className="text-3xl font-semibold mb-4">Top Picks</h1>
            <div className="grid grid-cols-4 gap-8">
              <div>
                <div className="bg-gray cursor-pointer rounded">
                  <img className="" src={image3} alt="" />
                </div>
                <h1 className="font-bold text-black">Nike Air</h1>
                <span className="text-red font-bold">ksh 1,300</span>
                <span className="mx-3 line-through font-bold text-grey">
                  ksh 1,300
                </span>
              </div>
              <div>
                <div className="bg-gray rounded">
                  <img className="" src={image} alt="" />
                </div>
                <h1 className="font-bold text-black">Nike Air</h1>
                <span className="text-red font-bold">ksh 1,300</span>
                <span className="mx-3 line-through font-bold text-grey">
                  ksh 1,300
                </span>
              </div>
              <div>
                <div className="bg-gray rounded">
                  <img className="" src={image3} alt="" />
                </div>
                <h1 className="font-bold text-black">Nike Air</h1>
                <span className="text-red font-bold">ksh 1,300</span>
                <span className="mx-3 line-through font-bold text-grey">
                  ksh 1,300
                </span>
              </div>
              <div>
                <div className="bg-gray rounded">
                  <img className="" src={image} alt="" />
                </div>
                <h1 className="font-bold text-black">Nike Air</h1>
                <span className="text-red font-bold">ksh 1,300</span>
                <span className="mx-3 line-through font-bold text-grey">
                  ksh 1,300
                </span>
              </div>
            </div>
            <div className="flex items-center cursor-pointer bg-red h-44 my-8 rounded p-8 scale-80 hover:scale-95 ease-in duration-500">
              <div>
                <img src={image2} alt="" />
              </div>
              <div>
                <h1 className="text-white font-bold text-4xl">
                  Nike Collections
                </h1>
                <p className="text-white">
                  Get the most exciting deals starting at ksh 1,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Featured />
    </>
  );
};

export default BodyOne;
