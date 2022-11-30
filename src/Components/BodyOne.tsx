import React from "react";
import image from '../images/3.png'

const BodyOne:React.FC = () => {
  return (
    <>
      <section className="bg-green py-12 px-16">
        <div className="flex">
          <div className="bg-white hover:shadow-2xl cursor-pointer transition ease-in-out delay-150 py-12">
            <h1 className="text-center text-2xl font-bold text-black">Introducing The latest Sneaker Collection</h1>
            <img className="h-70" src={image} alt="" />
          </div>
          <div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BodyOne;
