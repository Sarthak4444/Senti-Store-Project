import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../Redux/WishlistSlices";
import { increment, removeItem } from "../../Redux/CartSlices";

function Product() {
  const Params = useParams();
  const Id = Params.product;
  const [productNotFound, setProductNotFound] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${Id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => setProductNotFound(true));
  }, []);

  if (Object.keys(product).length === 0) {
    if (productNotFound) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#af92db]">
          <i className="fa-solid fa-triangle-exclamation text-3xl font-bold text-gray-900"></i>
          <p className="text-3xl font-bold text-gray-900">Product Not Found</p>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-row  justify-center min-h-screen bg-[#af92db]">
      <div className="bg-[#9167d1] m-10 md:p-20 p-4 rounded-3xl flex lg:flex-row flex-col md:flex-row items-center justify-center">
        <div className="lg:w-1/3">
          <img
            className="w-full h-96 rounded-2xl"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="lg:w-2/3 p-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-white">{product.description}</p>
          <p className="text-3xl font-bold text-white">${product.price}</p>
          <div className="flex flex-row mt-3">
            <button
              onClick={() =>
                dispatch(
                  wishlist.wishlistItems.includes(Id)
                    ? removeFromWishlist(Id)
                    : addToWishlist(Id)
                )
              }
              className=" text-[#D1B3C4] text-lg bg-[#1F0831] px-3 py-1 rounded-l-full"
            >
              <i
                className={`${
                  wishlist.wishlistItems.includes(Id)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }`}
              ></i>
            </button>
            <button
              onClick={() =>
                dispatch(
                  cart.cartItems.includes(Id) ? removeItem(Id) : increment(Id)
                )
              }
              className={`text-[#D1B3C4] text-lg bg-[#1F0831] py-1 w-32 rounded-r-full border-l-[2px] border-[#533977]`}
            >
              {cart.cartItems.includes(Id) ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
