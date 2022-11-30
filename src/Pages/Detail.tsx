import React from "react";
import image from "../images/7.png";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { MdSend } from "react-icons/md";
import Navbar from "../Components/Navbar";

const Detail: React.FC = () => {
  return (
    <>
    <Navbar />
      <section className="px-16 py-12">
        <div className="flex items-center justify-between gap-12">
          <div className="bg-gray w-4/12">
            <img className="" src={image} alt="" />
          </div>
          <div className="w-7/12">
            <h1 className="text-3xl my-4">Red Sneaker</h1>
            <span className="text-2xl">ksh 2,400</span>
            <span className="text-2xl text-grey line-through mx-8">
              ksh 2,700
            </span>
            <p className="text-xl my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              laboriosam pariatur adipisci ipsa unde rem quae illo quisquam
              possimus numquam?
            </p>
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
              <div>
                <button className="bg-black text-white border-2 border-black px-2 h-7 font-bold text-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <article className="my-8 flex gap-12">
          <div className="w-4/12">
            <h1 className="text-2xl my-2">Drop a Comment</h1>
            <form>
              <textarea
                className="w-full border-2 border-black px-4 py-4 h-20 focus:border-2 border-red"
                name=""
                id=""
              ></textarea>
              <button className="float-right">
                <MdSend className="text-4xl text-red" />
              </button>
            </form>
          </div>
          <div className="w-7/12 mx-auto">
            <h1 className="text-2xl mb-8 font-semibold underline">
              Available Comments
            </h1>
            <div className="my-8">
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati facere ab nulla placeat quia ea quibusdam accusamus
                dicta exercitationem libero?
              </p>
              <div className="flex items-center justify-between my-3">
                <p className="float-right text-grey">10th January 2023</p>
                <p className="float-right text-grey">By David Muchiri</p>
              </div>
              <hr className="text-gray" />
            </div>
            <div className="my-8">
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati facere ab nulla placeat quia ea quibusdam accusamus
                dicta exercitationem libero?
              </p>
              <div className="flex items-center justify-between my-3">
                <p className="float-right text-grey">10th January 2023</p>
                <p className="float-right text-grey">By David Muchiri</p>
              </div>
              <hr className="text-gray" />
            </div>
            <div className="my-8">
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati facere ab nulla placeat quia ea quibusdam accusamus
                dicta exercitationem libero?
              </p>
              <div className="flex items-center justify-between my-3">
                <p className="float-right text-grey">10th January 2023</p>
                <p className="float-right text-grey">By David Muchiri</p>
              </div>
              <hr className="text-gray" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Detail;
