import React from "react";
import image from "../images/3.png";
// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
      <section className="bg-green py-12 px-16">
        <div className="flex gap-12">
          <div className="w-3/12 bg-white hover:shadow-2xl cursor-pointer transition ease-in-out delay-150 py-12 px-4">
            <h1 className="text-center text-2xl font-bold text-black">
              Introducing The latest Sneaker Collection
            </h1>
            <img className="h-70" src={image} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">Top Picks</h1>
            <div className="flex gap-8">
              <div className="bg-gray rounded">
                <img className="w-10" src={image} alt="" />
              </div>
              <div className="bg-gray rounded">
                <img className="w-10" src={image} alt="" />
              </div>
              <div className="bg-gray rounded">
                <img className="w-10" src={image} alt="" />
              </div>
              <div className="bg-gray rounded">
                <img className="w-10" src={image} alt="" />
              </div>
              <div className="bg-gray rounded">
                <img className="w-10" src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyOne;
