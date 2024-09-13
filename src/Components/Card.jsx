import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Card(props) {
  const { Key, Name, Price, Image, Category, Id } = props || {};

  const { cartItems } = useSelector((state) => state.cart);
  const isInCart = cartItems.includes(Id);

  let CategoryName = "";

  if(Category === "electronics") {
    CategoryName = "Electronics";
  }

  if(Category === "jewelery") {
    CategoryName = "Jewelery";
  }

  if(Category === "men's clothing") {
    CategoryName = "Men's";
  }

  if(Category === "women's clothing") {
    CategoryName = "Women's";
  }

  let newName = Name.length > 30 ? Name.slice(0, 30) + "..."  : Name + "...";

  return (
    <div className="hover:scale-105 active:scale-100 transition-all max-w-xs border-[#1F0831] border-[1px] rounded-2xl shadow-2xl p-5 bg-[#533977]">
      <Link to={`/${Id}`}>
        <img src={Image} alt="product" className="rounded-2xl w-full h-40" />
      </Link>
    
      <h3 onClick={() => window.location.href = `/product?key=${Key}`} className="text-sm font-semibold text-white my-3 cursor-pointer">{newName} <span className="text-[#1F0831] ">Read More</span></h3>

      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold text-white">${Price}</p>
        <p className="text-sm rounded-full px-3 py-1 bg-[#1F0831] text-white">
          {CategoryName}
        </p>
      </div>
      <div className="flex flex-row justify-between mt-3">
        <button className="text-[#D1B3C4] text-lg bg-[#1F0831] px-3 py-1 rounded-l-full"><i className="fa-regular fa-heart"></i></button>
        <button className={`${isInCart ? "disabled" : ""}text-[#D1B3C4] text-lg bg-[#1F0831] py-1 w-full rounded-r-full border-l-[2px] border-[#533977]`}>{isInCart ? "Added" : "Add to cart"}</button>
      </div>
    </div>
  );
}

export default Card;
