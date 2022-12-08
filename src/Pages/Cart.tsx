import React from "react";
import Navbar from "../Components/Navbar";
import image from "../images/7.png";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Cart = () => {
  return (
    <>
      <Navbar />
      <section className="px-16 py-8">
        <div className="border-2 border-gray rounded-xl p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <div>
              <span className="text-xl">Home</span>
              <span className="text-xl">Cart</span>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-7/12">
              <hr className="text-gray my-8" />
              <div className="flex justify-between gap-12">
                <div className="bg-gray rounded">
                  <img className="h-30" src={image} alt="" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">Sneaker</h1>
                  <span className="text-xl text-grey my-3">Maroon</span>
                  <p className="my-3 text-xl">ksh 2,400</p>
                  <div className="mt-24">
                    <p className="text-xl">In stock</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 my-8">
                  <div>
                    <h1>QTY :</h1>
                  </div>
                  <div className="border-2 border-black px-4 h-7 pt-4 font-bold text-xl">
                    7
                  </div>
                  <div className="">
                    <div className="border-2 border-black px-4">
                      <TiArrowSortedUp className="text-2xl" />
                    </div>
                    <div className="border-2 border-black px-4">
                      <TiArrowSortedDown className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="text-4xl text-red font-bold">x</div>
              </div>
              <hr className="text-gray my-8" />
              <div className="flex justify-between gap-12">
                <div className="bg-gray rounded">
                  <img className="h-30" src={image} alt="" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">Sneaker</h1>
                  <span className="text-xl text-grey my-3">Maroon</span>
                  <p className="my-3 text-xl">ksh 2,400</p>
                  <div className="mt-24">
                    <p className="text-xl">In stock</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 my-8">
                  <div>
                    <h1>QTY :</h1>
                  </div>
                  <div className="border-2 border-black px-4 h-7 pt-4 font-bold text-xl">
                    7
                  </div>
                  <div className="">
                    <div className="border-2 border-black px-4">
                      <TiArrowSortedUp className="text-2xl" />
                    </div>
                    <div className="border-2 border-black px-4">
                      <TiArrowSortedDown className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="text-4xl text-red font-bold">x</div>
              </div>
            </div>
            <div className="bg-white shadow-xl h-40 mt-8 shadow rounded-xl p-4 w-4/12 mx-auto">
                <h1 className="text-3xl">Order Summary</h1>
                <div className="flex items-center justify-between my-4">
                    <h1 className="text-xl">SubTotal</h1>
                    <p className="text-xl">ksh 4,400</p>
                </div>
                <hr className="text-grey"/>
                <div className="flex items-center justify-between my-4">
                    <h1 className="text-xl">SubTotal</h1>
                    <p className="text-xl">ksh 4,400</p>
                </div>
                <hr className="text-grey"/>
                <button className="bg-red p-3 text-white w-full my-4 rounded text-xl">Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
