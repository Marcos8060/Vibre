import React from "react";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <section className="bg-white shadow-2xl h-24 px-12 py-8">
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
              <AiOutlineShopping className="text-4xl text-grey" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
