import React from "react";

import { SectionWrap } from "../wrapper";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header text-center w-fit text-primary font-bold text-4xl">
          Contact Me
        </h3>

        <div className="flex flex-wrap justify-center gap-y-4 md:gap-x-8 xl:gap-x-12">
          <div className="bg-primary rounded-xl px-6 py-4 w-full md:w-[300px] text-center text-sm break-all">
            adewaletaiwo08@gmail.com
          </div>
          <div className="bg-primary rounded-xl px-6 py-4 w-full md:w-[300px] text-center text-sm break-all">
            +2348106529259
          </div>
        </div>

        <form action="" className="flex flex-col gap-y-6 w-full md:w-[500px]">
          <input
            type="text"
            name=""
            id="name"
            className="w-full p-4 rounded-xl outline-none placeholder:text-sm fbg-main-bg bg-[#37393c] border border-[rgb(64,66,69)]"
            placeholder="Your Name"
          />

          <input
            type="text"
            name=""
            id="email"
            className="w-full p-4 rounded-xl outline-none placeholder:text-sm fbg-main-bg bg-[#37393c] border border-[rgb(64,66,69)]"
            placeholder="Your Email"
          />

          <textarea
            type="text"
            name=""
            id="name"
            className="w-full p-4 rounded-xl outline-none placeholder:text-sm fbg-main-bg bg-[#37393c] border border-[rgb(64,66,69)] h-[150px]"
            placeholder="Your Message"
          />

          <div className="text-center mt-4">
            <button className="bg-primary py-3 px-8 text-white font-medium rounded-xl tracking-[0.5px]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SectionWrap(Contact, "contact");
