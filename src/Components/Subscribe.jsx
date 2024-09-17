import React, { useState } from "react";
import { motion } from 'framer-motion';

 

function Subscribe() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex flex-col items-baseline">
      <div className="text-[#D1B3C4] text-xl md:text-2xl">
        <i className="fa-regular fa-envelope mr-3"></i>Stay updated on the latest
        fashion
      </div>
      <input
        type="text"
        placeholder="Email"
        className=" my-5 pl-2 py-2 w-24 md:w-60 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent"
      />
      <button onClick={toggleMenu} className="bg-[#751CB4] text-[#D1B3C4] px-4 py-2 rounded-lg hover:bg-[#621a96] active:bg-[#3c1359] ">
            Subscribe
        </button>
        <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`absolute bottom-16 ${isOpen ? "block" : "hidden"} right-10 z-50 w-auto flex flex-row items-center justify-center bg-white shadow-lg rounded-lg p-4`}
      >
        <i className="fa-solid fa-check bg-[#1F0831] rounded-full p-2 py-1 text-white text-lg"></i>
        <p className="text-[#1F0831] text-xl ml-2">Thank you for subscribing!</p>
      </motion.div>
    </div>
  );
}

export default Subscribe;
