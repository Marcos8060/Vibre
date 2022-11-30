import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <section className="bg-black text-white shadow h-24 px-12 py-8 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div>
            <Link to='/' className="text-4xl font-bold">Vibre</Link>
          </div>
          <div>
            <ul className="uppercase flex items-center gap-8">
              <li className="text-xl">Home</li>
              <li className="text-xl">Blog</li>
              <li className="text-xl">Home</li>
              <li className="text-xl">Home</li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-12">
            <FaUserCircle className="text-4xl text-white" />
            <div className="flex">
              <AiOutlineShopping className="text-4xl text-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
