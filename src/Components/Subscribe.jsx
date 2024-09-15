import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col items-baseline">
      <div className="text-[#D1B3C4] text-xl md:text-2xl">
        <i className="fa-regular fa-envelope mr-3"></i>Stay updated on the latest
        fashion
      </div>
      <input
        type="text"
        placeholder="Email"
        className=" my-5 pl-2 py-2 w-20 md:w-60 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent"
      />
      <button className="bg-[#751CB4] text-[#D1B3C4] px-4 py-2 rounded-lg hover:bg-[#621a96] active:bg-[#3c1359] ">
            Subscribe
        </button>
    </div>
  );
}

export default Subscribe;
