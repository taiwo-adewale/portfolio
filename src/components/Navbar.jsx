import React from "react";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";

import { SectionWrap } from "../wrapper";

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <>
      <a
        href="#"
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t gradient-colors"
      >
        WALE
      </a>

      <ul className="items-center gap-x-4 hidden md:flex">
        {["about", "skills", "works", "contact"].map((link, index) => (
          <li key={`link-${index}`}>
            <a
              href={`#${link}`}
              className="px-2 py-1 text-gray-200 uppercase hover:text-secondary font-medium transition-all duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setIsMobileNavActive((prevState) => !prevState)}
        className="w-[35px] h-[35px] rounded-full bg-gradient-to-t gradient-colors flex justify-center items-center md:hidden cursor-pointer"
      >
        <HiMenuAlt4 className="w-[70%] h-[70%] text-white" />
      </div>

      {isMobileNavActive && (
        <div className="nav-mobile fixed top-0 h-screen sm280:w-full w-[280px] p-8 shadow-sm shadow-stone-600 bg-main-bg z-[30] md:hidden">
          <div className="flex flex-col h-full gap-y-8 overflow-y-auto">
            <div
              onClick={() => setIsMobileNavActive(false)}
              className="px-2 py-1 cursor-pointer w-fit self-end"
            >
              <MdOutlineCancel className="w-6 h-6" />
            </div>

            {["about", "skills", "works", "contact"].map((link, index) => (
              <a
                href={`#${link}`}
                key={`mobile-link-${index}`}
                onClick={() => setIsMobileNavActive(false)}
                className="px-2 py-1 hover:text-white uppercase"
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
