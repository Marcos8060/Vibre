import React from "react";
import image from "../images/7.png";
import { AiOutlineShopping, AiFillEye } from "react-icons/ai";

const Featured: React.FC = () => {
  return (
    <>
      <section className="px-16">
        <h1 className="text-4xl font-semibold">Featured Collections</h1>
        <h1 className="text-3xl font-semibold mb-4">Top Brands</h1>
        <div className="grid grid-cols-4 gap-4 my-12">
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="bg-gray rounded">
              <img
                className="w-72 group-hover:rotate-3 duration-700 group-hover:scale-150 transition-transform"
                src={image}
                alt=""
              />
            </div>
            <div className="bg-black py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-9 text-center translate-y-[85%] group-hover:translate-y-[60%] transition-all">
              <h1 className="mb-8 text-white">Nike Shoes</h1>
              <div className="flex items-center justify-between">
                <AiOutlineShopping className="text-white text-4xl" />
                <AiFillEye className="text-white text-4xl" />
              </div>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="bg-gray rounded">
              <img
                className="w-80 group-hover:rotate-3 duration-700 group-hover:scale-150 transition-transform"
                src={image}
                alt=""
              />
            </div>
            <div className="bg-black py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-9 text-center translate-y-[85%] group-hover:translate-y-[60%] transition-all">
              <h1 className="mb-8 text-white">Nike Shoes</h1>
              <div className="flex items-center justify-between">
                <AiOutlineShopping className="text-white text-4xl" />
                <AiFillEye className="text-white text-4xl" />
              </div>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="bg-gray rounded">
              <img
                className="w-80 group-hover:rotate-3 duration-700 group-hover:scale-150 transition-transform"
                src={image}
                alt=""
              />
            </div>
            <div className="bg-black py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-9 text-center translate-y-[85%] group-hover:translate-y-[60%] transition-all">
              <h1 className="mb-8 text-white">Nike Shoes</h1>
              <div className="flex items-center justify-between">
                <AiOutlineShopping className="text-white text-4xl" />
                <AiFillEye className="text-white text-4xl" />
              </div>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="bg-gray rounded">
              <img
                className="w-80 group-hover:rotate-3 duration-700 group-hover:scale-150 transition-transform"
                src={image}
                alt=""
              />
            </div>
            <div className="bg-black py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-9 text-center translate-y-[85%] group-hover:translate-y-[60%] transition-all">
              <h1 className="mb-8 text-white">Nike Shoes</h1>
              <div className="flex items-center justify-between">
                <AiOutlineShopping className="text-white text-4xl" />
                <AiFillEye className="text-white text-4xl" />
              </div>
            </div>
          </div>
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
            <div className="bg-gray rounded">
              <img
                className="w-80 group-hover:rotate-3 duration-700 group-hover:scale-150 transition-transform"
                src={image}
                alt=""
              />
            </div>
            <div className="bg-black py-2 duration-500 opacity-90 absolute inset-0 flex-flex-col items-center justify-center px-9 text-center translate-y-[85%] group-hover:translate-y-[60%] transition-all">
              <h1 className="mb-8 text-white">Nike Shoes</h1>
              <div className="flex items-center justify-between">
                <AiOutlineShopping className="text-white text-4xl" />
                <AiFillEye className="text-white text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
