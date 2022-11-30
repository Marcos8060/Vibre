import React from "react";
import image from "../images/head1.jpg";
import image2 from "../images/head2.jpg";
import image3 from "../images/head3.jpg";
import image4 from "../images/head4.jpg";
import face from "../images/face.jpeg";
import lady from "../images/lady.jpg";

const Featured: React.FC = () => {
  return (
    <>
      <section className="px-16">
        <h1 className="text-4xl font-semibold">Featured Sounds</h1>
        <div className="flex gap-16 my-8">
          <div className="">
            <div>
              <img className="rounded scale-80 hover:scale-95 ease-in duration-500 cursor-pointer" src={face} alt="" />
            </div>
          </div>
          <div className="w-7/12">
            <h1 className="text-3xl font-semibold mb-4">Top Brands</h1>
            <div className="container">
              <div className="lg:flex">
                <div className="box">
                  <div className="imgBox">
                    <img className="rounded" src={image} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                      Generic <br />
                      <span className="cursor-pointer hover:text-red hover:font-semibold">Add to Cart</span>
                    </h2>
                  </div>
                </div>
                <div className="box">
                  <div className="imgBox">
                    <img className="rounded" src={image2} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                      Production<br />
                      <span className="cursor-pointer hover:text-red hover:font-semibold">Add to Cart</span>
                    </h2>
                  </div>
                </div>
                <div className="box">
                  <div className="imgBox">
                    <img className="rounded" src={image3} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                       Sony XP
                      <span className="cursor-pointer hover:text-red hover:font-semibold">
                        <br /> Add to Cart
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="lg:flex">
                <div className="box">
                  <div className="imgBox">
                    <img className="rounded" src={image4} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                      Generic <br />
                      <span className="cursor-pointer hover:text-red hover:font-semibold">Add to Cart</span>
                    </h2>
                  </div>
                </div>
                <div className="box">
                  <div className="imgBox">
                    <img className="rounded" src={image2} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                      Production<br />
                      <span className="cursor-pointer hover:text-red hover:font-semibold">Add to Cart</span>
                    </h2>
                  </div>
                </div>
                <div className="box">
                  <div className="imgBox">
                    <img className="rounded" src={image3} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                       Sony XP
                      <span className="cursor-pointer hover:text-red hover:font-semibold">
                        <br /> Add to Cart
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
