import React from "react";

const SectionWrap = (Component, id) =>
  function HOC() {
    return (
      <div
        id={id || ""}
        className="bg-section-bg w-full px-4 sm:px-8 py-4 mt-4 mb-6 last:mb-4 flex justify-between items-center rounded-2xl"
      >
        <Component />
      </div>
    );
  };

export default SectionWrap;
