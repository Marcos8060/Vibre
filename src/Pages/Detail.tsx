import React from "react";
import image from "../images/7.png";

const Detail: React.FC = () => {
  return (
    <section className="px-16 py-12">
      <div className="flex items-center justify-center gap-12">
        <div className="bg-gray">
          <img src={image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl">Red Sneaker</h1>
          <span className="text-2xl">ksh 2,400</span>
          <span className="text-2xl text-grey line-through mx-8">
            ksh 2,700
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            laboriosam pariatur adipisci ipsa unde rem quae illo quisquam
            possimus numquam?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
