import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card";

function Store() {

  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("");

  function handleInput(value) {
    setQuery(value.toLowerCase());
  }

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  if (allProducts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const productArray = allProducts.filter(
    (product) => category === "" || product.category.name === category
  ).filter((product) => product.title.toLowerCase().includes(query))
    .map((product) => (
      <Card
        key={product.id}
        Name={product.title}
        Price={product.price}
        Category={product.category.name}
        Image={product.images[0]}
      />
    ));

  return (
    <div className="bg-[#af92db]">
      <div className="grid grid-cols-4 grid-rows-1 ">
        <div className="col-span-1 row-span-1 p-8 ">
          <div className="flex flex-col justify-center">
            <div>
              <input
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-300 w-44 rounded-l-lg focus:outline-[#621a96]"
              />
              <button className="bg-[#751CB4] text-[#D1B3C4] px-3 py-2 rounded-r-lg hover:bg-[#621a96] active:bg-[#3c1359] ">
                Search
              </button>
            </div>
            <div className="mt-5 border border-[#621a96] mr-5 rounded-2xl bg-violet-500 p-8">
              <p className="text-2xl mb-4 font-bold text-[#2a272c] ">CATEGORIES</p>
              <div>
                <button onClick={() => setCategory("Clothes")} className="w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent">Clothes</button>
              </div>
              <div>
                <button onClick={() => setCategory("Electronics")} className="w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent">Electronics</button>
              </div>
              <div>
                <button onClick={() => setCategory("Shoes")} className="w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent">Shoes</button>
              </div>
              <div>
                <button onClick={() => setCategory("Furniture")} className="w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent">Furniture</button>
              </div>
              <div>
                <button onClick={() => setCategory("Miscellaneous")} className="w-full active:bg-gradient-to-r active:from-[#621a96] text-left text-xl text-[#ffffff] mb-4 p-3 rounded-lg bg-gradient-to-r from-[#1F0831] to-transparent">Miscellaneous</button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-span-3 row-span-1">
          {productArray}
        </div>
      </div>
    </div>
  );
}

export default Store;
