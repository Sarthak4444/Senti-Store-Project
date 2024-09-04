import React from "react";
import { motion } from "framer-motion";

function SiteFeatures() {
  return (
    <div>
        
          <h1 className="text-xl font-bold text-[#1F0831] text-center -mb-3">
            WHY CHOOSE US? SEE YOURSELF
          </h1>
       
      <div className="p-20 max-w-[1000px] mx-auto md:grid md:gap-10 md:grid-cols-5 md:grid-rows-2 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#ffffff] col-span-2 row-span-1 flex flex-col justify-center md:mb-0 mb-10 items-center p-8 rounded-3xl shadow-xl "
        >
          <i className="fa-solid fa-hand-holding-dollar text-4xl text-[#1F0831]"></i>
          <p className="text-lg text-center md:text-3xl font-sans font-bold bg-[#751CB4] text-[#ffffff] rounded-full p-3 my-4 px-5 ">
            Cheap Prices
          </p>
          <p className="text-lg -mt-2 text-center">Low Budget? We've got you</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#ffffff] col-span-3 row-span-1 md:mb-0 mb-10 flex flex-col justify-center items-center p-8 rounded-3xl shadow-xl "
        >
          <i className="fa-solid fa-truck text-4xl text-[#1F0831]"></i>
          <p className="text-lg text-center md:text-3xl font-sans font-bold bg-[#751CB4] text-[#ffffff] rounded-full p-3 my-4 px-5 ">
            Fast Delivery
          </p>
          <p className="text-lg -mt-2 text-center">We deliver right to your door</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#ffffff] col-span-3 md:mb-0 mb-10 row-span-1 flex flex-col justify-center items-center p-8 rounded-3xl shadow-xl "
        >
          <i className="fa-solid fa-handshake-simple text-4xl text-[#1F0831]"></i>
          <p className="text-lg text-center md:text-3xl font-sans font-bold bg-[#751CB4] text-[#ffffff] rounded-full p-3 my-4 px-5 ">
            Trusted Suppliers
          </p>
          <p className="text-lg -mt-2 text-center">You will always get what you pay for</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#ffffff] md:mb-0 mb-10 col-span-2 row-span-1 flex flex-col justify-center items-center p-8 rounded-3xl shadow-xl "
        >
          <i className="fa-solid fa-lock text-4xl text-[#1F0831]"></i>
          <p className="text-lg text-center md:text-3xl font-sans font-bold bg-[#751CB4] text-[#ffffff] rounded-full p-3 my-4 px-5 ">
            Secure
          </p>
          <p className="text-lg -mt-2 text-center">100% secure payment</p>
        </motion.div>
      </div>
    </div>
  );
}

export default SiteFeatures;
