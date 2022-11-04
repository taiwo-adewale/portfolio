import React from "react";
import { useState } from "react";

import { SectionWrap } from "../wrapper";

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <>
      <a href="#" className="text-3xl font-bold text-primary">
        Adewale
      </a>

      <ul className="items-center gap-x-2 hidden md:flex">
        {["about", "skills", "works", "contact"].map((link, index) => (
          <li key={`link-${index}`}>
            <a href={`#${link}`} className="px-2 py-1 text-gray-200 capitalize">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setIsMobileNavActive((prevState) => !prevState)}
        className="w-[35px] h-[35px] rounded-full bg-primary flex justify-center items-center md:hidden cursor-pointer"
      ></div>

      {isMobileNavActive && (
        <div className="nav-mobile fixed top-0 h-screen sm280:w-full w-[280px] p-8 shadow-sm shadow-stone-600 bg-main-bg z-[30] md:hidden">
          <div className="flex flex-col h-full gap-y-8">
            <div
              onClick={() => setIsMobileNavActive(false)}
              className="px-2 py-1 text-gray-200 cursor-pointer w-fit self-end"
            >
              X
            </div>

            {["about", "skills", "works", "contact"].map((link, index) => (
              <a
                href={`#${link}`}
                key={`mobile-link-${index}`}
                onClick={() => setIsMobileNavActive(false)}
                className="px-2 py-1 text-gray-200 hover:text-white uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrap(Navbar);
