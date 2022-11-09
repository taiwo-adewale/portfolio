import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  Navigation,
  FreeMode,
  Scrollbar,
  Mousewheel,
} from "swiper";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import { works } from "../data";
import { SectionWrap } from "../wrapper";

const Works = () => {
  return (
    <>
      <div className="flex flex-col gap-y-12 pt-4 pb-8 w-full items-center">
        <h3 className="section-header w-fit text-center text-primary font-bold text-4xl">
          My Works
        </h3>

        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          modules={[Pagination, Mousewheel, FreeMode]}
          mousewheel={{ invert: false, forceToAxis: true }}
          className="mySwiper w-full"
        >
          {works.map((work, index) => (
            <SwiperSlide
              key={`work-${index}`}
              className="w-full max-w-[300px] md:max-w-[350px]"
            >
              <div className="bg-[#202020] flex flex-col rounded-2xl overflow-hidden">
                <img src={work.image} alt="project" className="w-full" />

                <div className="flex flex-col p-4 pb-6 gap-2 rounded-b-2xl border-t-0 border border-[rgba(64,66,69,0.5)]">
                  <div>
                    <h4 className="text-2xl capitalize font-bold truncate text-gray-100">
                      {work.title}
                    </h4>
                    <p className="text-xs sm:text-sm">{work.description}</p>
                  </div>

                  <div className="flex xs:flex-wrap sm:flex-nowrap gap-x-4 gap-y-2 mt-4">
                    <a
                      href={work.projectUrl}
                      target="_blank"
                      className="w-1/2 flex items-center justify-center gap-x-2 bg-gradient-to-br gradient-colors text-white text-center rounded-lg text-sm px-4 xs:py-1.5 py-2 font-medium flex-grow sm:flex-grow-0"
                    >
                      <BiWorld className="text-base" />
                      <span>Live Site</span>
                    </a>
                    <a
                      href={work.github}
                      target="_blank"
                      className="w-1/2 flex items-center justify-center gap-x-2 bg-[#171515] text-white text-center rounded-lg text-sm px-4 xs:py-1.5 py-2 font-medium flex-grow sm:flex-grow-0"
                    >
                      <FaGithub className="text-base" />
                      <span>Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrap(Works, "works");
