import React, { useEffect, useState, useRef } from "react";

const SkillsProgress = ({ endValue, name }) => {
  const [progressValue, setProgressValue] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        handleProgress();
        observer.unobserve(scrollRef.current);
      }
    }, {});

    if (scrollRef.current) observer.observe(scrollRef.current);

    return () => {
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, []);

  const handleProgress = () => {
    let progressVal = 0;

    let progress = setInterval(() => {
      progressVal++;

      if (progressVal === endValue) {
        clearInterval(progress);
      }

      setProgressValue(progressVal);
    }, 15);
  };

  return (
    <div ref={scrollRef} className="flex flex-col items-center gap-y-2">
      <div
        className="circular-progress relative w-20 h-20 sm:w-28 sm:h-28 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full flex justify-center items-center"
        style={{
          background: `conic-gradient( rgb(0,160,149) ${
            progressValue * 3.6
          }deg, rgb(229,231,235) ${progressValue * 3.6}deg)`,
        }}
      >
        <div className="relative font-bold">
          <span className="text-xl sm:text-2xl xl:text-3xl">
            {progressValue}
          </span>
          <span className="text-md sm:text-lg xl:text-2xl">%</span>
        </div>
      </div>

      <h4>{name}</h4>
    </div>
  );
};

export default SkillsProgress;
