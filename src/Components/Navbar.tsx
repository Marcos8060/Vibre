import React from "react";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <section className="bg-white shadow h-24 px-12 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-red">Vibre</h1>
          </div>
          <div>
            <input
              className="w-96 border border-1 py-2 px-8 rounded-3xl focus:outline-red focus:border-1 hover:border-red text-xl border-gray"
              type="search"
              placeholder="Search Product..."
            />
          </div>
          <div className="flex items-center justify-between gap-12">
            <FaUserCircle className="text-4xl text-grey" />
            <div className="flex">
              <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-red">
                <a href="#" role="button" className="relative flex">
                  <AiOutlineShopping className="flex-1 w-8 h-8 fill-current"/>
                  <span className="absolute right-0 top-0 rounded-full bg-red w-4 h-4 top right p-0 m-0 text-white font-mono leading-tight text-center">
                    5
                  </span>
                </a>
              </li>
              {/* <AiOutlineShopping className="text-4xl text-grey" />
            <span className=" text-red px-2 py-0 text-2xl font-semibold left-0">0</span> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
