import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import SiteFeatures from "../SiteFeatures";
import nobgshoe from "../../Assets/nobgshoe.png";
import background from "../../Assets/background.png";

function Home() {
  return (
    <>
      <div className=" bg-[#af92db]">
        <section className="flex flex-row items-center justify-around max-w-[1100px] mx-auto py-24">
          <div className="lg:mx-0 mx-10">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
            >
              <p className="text-[#ffffff] text-5xl font-bold">
                Fashion that <span className="text-[#1F0831]">Empowers</span>
              </p>
            </motion.div>

            <p className="text-[#e1e1e1] text-xl font-medium my-8">
              When it comes to dressing like royalty, evening events are where
              it's at. Wear a show-stopping gown to your romantic dinner, formal
              event, or company ball, and watch as heads turn.{" "}
            </p>

            <div className="flex flex-row">
              <div className="flex flex-col">
                <Link to="/store">
                  <button className="bg-[#1F0831] hover:scale-105 transition-all mt-10 text-xl md:text-2xl text-[#ffffff] px-10 py-4 rounded-full hover:bg-[#3c1359] active:bg-[#621a96] ">
                    Shop Now
                  </button>
                </Link>
                <Link to="/about">
                  <button className="bg-[#2a272c] hover:scale-105 transition-all text-[16px] ml-2 mt-5 px-5 py-2 text-[#ffffff] rounded-full hover:bg-[#39333d] active:bg-[#6f6776] ">
                    Learn More
                  </button>
                </Link>
              </div>
              <span className="heroImg  ml-40 inline-block ">
                <img
                  className="absolute transition-all w-[200px] scale-150 -rotate-[20deg] z-10 -ml-20"
                  src={nobgshoe}
                  alt="shoe"
                />
                <img className="w-[200px]" src={background} alt="shoe" />
              </span>
            </div>
          </div>
          <div className="relative hidden md:inline">
            <img
              className="absolute transition-all scale-150 -rotate-[20deg] z-10 -ml-20"
              src={nobgshoe}
              alt="shoe"
            />
            <img className="w-[1000px]" src={background} alt="shoe" />
          </div>
        </section>
      </div>
      <div className=" bg-[#533977] relative">
        <div className="custom-shape-divider-top-1725182161">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center m-auto max-w-[1100px] h-[550px]">
          <p className="text-[#ffffff] m-8 text-center text-5xl mt-14 font-bold">
            <ReactTyped
              strings={["Make your Outfit wonderful"]}
              typeSpeed={100}
              loop
            />
          </p>
          <p className="text-[#c9c9c9] m-8 text-center text-xl font-medium my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatem temporibus ipsam numquam repudiandae placeat inventore
            magnam aut modi dolores laudantium dignissimos perspiciatis
            officiis, quae quaerat tempore possimus ipsa consequatur.
          </p>
        </div>
        <div className="custom-shape-divider-bottom-1725182457">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-[#af92db]">
        <SiteFeatures />
      </div>
    </>
  );
}

export default Home;
