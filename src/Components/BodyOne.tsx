import React from "react";
import image from '../images/2.jpg'

const BodyOne:React.FC = () => {
  return (
    <>
      <section className="bg-green py-12 px-16">
        <div className="flex">
          <div>
            <img className="h-80" src={image} alt="" />
          </div>
          <div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BodyOne;
