import React from "react";
import { MdSend } from 'react-icons/md'

const Footer: React.FC = () => {
  return (
    <section className="bg-black text-white px-16 py-12 h-40">
      <div className="flex gap-4 h-20 items-center justify-between">
        <div>
          <h1 className="font-bold text-4xl uppercase underline my-4">Vibre</h1>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br />
            earum eum voluptatum distinctio pariatur perferendis quasi <br /> beatae
            adipisci ullam? Repudiandae?
          </p>
        </div>
        <div>
          <h1 className="font-bold text-2xl underline my-4">Information</h1>
          <ul>
            <li>Bookmark</li>
            <li>Features</li>
            <li>Lists</li>
          </ul>
        </div>
        <div>
        <h1 className="font-bold text-2xl underline my-4">Our Newsletter</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, dignissimos!</p>
        <form className="flex items-center">
          <input placeholder="Email..." className="bg-white px-8 h-7" type="text" />
          <button className="bg-black h-7">
            <MdSend className="text-3xl"/>
          </button>
        </form>
        </div>
      </div>
      <p className="text-center mt-12">Made with Love by Marcos Ochieng</p>
    </section>
  );
};

export default Footer;
