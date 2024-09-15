import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Store() {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("");

  function handleInput(value) {
    setQuery(value.toLowerCase());
  }

  const cart = useSelector((state) => state.cart.cartItems);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (cart.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    toggleMenu();
  }, [cart]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  if (allProducts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const productArray = allProducts
    .filter((product) => category === "" || product.category === category)
    .filter((product) => product.title.toLowerCase().includes(query))
    .map((product) => (
      <Card
        key={product.id}
        Name={product.title}
        Price={product.price}
        Image={product.image}
        Category={product.category}
        Id={product.id}
      />
    ));

  return (
    <div className="bg-[#af92db]">
      <Link to="/cart">
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="absolute bottom-40 right-10 z-50 cursor-pointer bg-white shadow-lg rounded-full p-4"
        >
          <i className="fa-solid fa-cart-shopping relative text-[#1F0831] text-3xl">
            <p className="text-white bg-red-600 rounded-full flex items-center justify-center p-1 px-2 -top-2 -right-2 text-xs absolute">
              {cart.length}
            </p>
          </i>
        </motion.div>
      </Link>
      <div className="lg:hidden">
        <div className="flex items-center pt-5 justify-center">
          <input
            onChange={(e) => handleInput(e.target.value)}
            type="text"
            placeholder="Search"
            className="px-4 py-2 min-w-20 border border-gray-300 rounded-l-lg focus:outline-[#621a96]"
          />
          <button className="bg-[#533977] text-[#D1B3C4] px-3 py-2 mr-5 rounded-r-lg hover:bg-[#621a96] active:bg-[#3c1359] ">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 ">
        <div className="col-span-1 row-span-1 p-8 lg:block hidden">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <input
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                placeholder="Search"
                className="flex-grow px-4 py-2 min-w-20 border border-gray-300 rounded-l-lg focus:outline-[#621a96]"
              />
              <button className="bg-[#533977] text-[#D1B3C4] px-3 py-2 mr-5 rounded-r-lg hover:bg-[#621a96] active:bg-[#3c1359] ">
                Search
              </button>
            </div>
            <div className="mt-5 border border-[#621a96] mr-5 rounded-2xl bg-violet-500 p-8">
              <p className="text-2xl mb-4 font-bold text-[#2a272c] ">
                CATEGORIES
              </p>
              <div>
                <button
                  onClick={() => setCategory("")}
                  className="hover:scale-105  w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent"
                >
                  All
                </button>
              </div>
              <div>
                <button
                  onClick={() => setCategory("electronics")}
                  className="hover:scale-105 w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent"
                >
                  Electronics
                </button>
              </div>
              <div>
                <button
                  onClick={() => setCategory("jewelery")}
                  className="hover:scale-105 w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent"
                >
                  Jewelery
                </button>
              </div>
              <div>
                <button
                  onClick={() => setCategory("men's clothing")}
                  className="hover:scale-105 w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent"
                >
                  Men's
                </button>
              </div>
              <div>
                <button
                  onClick={() => setCategory("women's clothing")}
                  className="hover:scale-105 w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent"
                >
                  Women's
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="place-items-center col-span-4 lg:col-span-3 row-span-1 p-10 border-l-[1px] border-[#1F0831] grid gap-10 xs:grid-cols-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {productArray}
        </div>
      </div>
    </div>
  );
}

export default Store;
