import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card";
import { useState, useEffect } from "react";

function Wishlist() {
  const Items = useSelector((state) => state.wishlist.wishlistItems);

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      const fetchedItems = await Promise.all(
        Items.map(async (item) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${item}`
          );
          return response.json();
        })
      );
      setWishlistItems(fetchedItems);
    };

    fetchWishlistItems();
  }, [Items]);

  const productArray = wishlistItems.map((product) => (
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
      {productArray.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#af92db]">
          <i className="fa-solid fa-triangle-exclamation text-3xl font-bold text-gray-900"></i>
          <p className="text-3xl pt-5 font-bold text-gray-900">
            Wishlist is Empty
          </p>
          <Link to="/store">
          <button className="bg-[#1F0831] hover:scale-105 transition-all mt-8 text-xl md:text-2xl text-[#ffffff] px-10 py-4 rounded-full hover:bg-[#3c1359] active:bg-[#621a96] ">
            Shop Now
          </button>
          </Link>
        </div>
      ) : null}
      <div className="grid place-items-center items-start p-10 border-l-[1px] border-[#1F0831] gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
        {productArray}
      </div>
    </div>
  );
}

export default Wishlist;
