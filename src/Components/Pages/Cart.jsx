import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { increment, decrement, removeItem, clearCart } from "../../Redux/CartSlices";

function Cart() {
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.cart.cartItems);

  const [cartItems, setcartItems] = useState([]);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
      dispatch(clearCart());
    }, 2000);
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

  const handleIncrement = (product) => {
    dispatch(increment(product));
  };
  const handleDecrement = (product) => {
    dispatch(decrement(product));
  };
  const handleRemove = (product) => {
    dispatch(removeItem(product));
  };

  useEffect(() => {
    const fetchcartItems = async () => {
      const fetchedItems = await Promise.all(
        Items.map(async (item) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${item}`
          );
          return response.json();
        })
      );
      setcartItems(fetchedItems);
    };

    fetchcartItems();
  }, [Items]);

  useEffect(() => {
    setSubTotalPrice(
      cartItems.reduce((acc, product) => acc + product.price, 0)
    );
  }, [cartItems]);

  const uniqueCartItems = cartItems.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }

    return acc;
  }, []);

  let newName = "";

  useEffect(() => {
    if (subTotalPrice > 398) {
      setTax((subTotalPrice * 8) / 100);
      setDiscount((subTotalPrice * 40) / 100);
      setGrandTotal(subTotalPrice);
    }

    if (subTotalPrice <= 398) {
      setTax((subTotalPrice * 8) / 100);
      setDiscount(0);
      setGrandTotal(subTotalPrice);
    }
  }, [subTotalPrice]);

  const productArray = uniqueCartItems.map((product) => (
    <div
      key={product.id}
      className="grid grid-cols-6"
    >
      <div className="col-span-4 flex flex-row  p-4">
        <Link to={`/${product.id}`}>
          <img
            className="w-[50px] md:w-[76px] h-[50px] md:h-[76px] rounded-2xl"
            src={product.image}
            alt="product"
          />
        </Link>
        <p className="ml-5 text-sm md:text-xl ">
          {
            (newName =
              product.title.length > 40
                ? product.title.slice(0, 40) + "..."
                : product.title)
          }
        </p>
      </div>
      <div className="col-span-1 p-4 items-center justify-center flex">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() =>
              product.quantity > 1
                ? handleDecrement(product.id)
                : handleRemove(product.id)
            }
            className="bg-[#1F0831] text-sm md:text-lg text-white p-1 md:p-2 md:py-1 rounded-l-lg active:scale-75 transition-all"
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <p className="md:p-2 p-1 text-sm md:text-lg bg-white text-[#1F0831] md:py-1">
            {product.quantity}
          </p>
          <button
            onClick={() => handleIncrement(product.id)}
            className="bg-[#1F0831] text-sm md:text-lg active:scale-75 transition-all text-white p-1 md:p-2 md:py-1 rounded-r-lg"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="col-span-1 p-4 text-lg md:text-xl flex justify-center items-center">
        ${product.price * product.quantity}
      </div>
    </div>
  ));

  return (
    <div className=" bg-[#af92db] pt-10 pb-10 min-h-[80vh]">
      <div className="m-10 mt-0 mb-0 rounded-2xl bg-[#9167d1]">
        {productArray.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#af92db]">
            <i className="fa-solid fa-triangle-exclamation text-3xl font-bold text-gray-900"></i>
            <p className="text-3xl pt-5 font-bold text-gray-900">
              Cart is Empty
            </p>
            <Link to="/store">
              <button className="bg-[#1F0831] hover:scale-105 transition-all mt-8 text-xl md:text-2xl text-[#ffffff] px-10 py-4 rounded-full hover:bg-[#3c1359] active:bg-[#621a96] ">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div>{productArray}</div>
            </div>
            <div className="border-4 border-[#1F0831] rounded-2xl p-5 md:p-10">
              <div className="flex flex-col gap-5 pb-6 mb-6 border-b-2 border-[#1F083158]">
                <div className="flex flex-row items-center justify-between text-xl md:text-3xl font-[#1F0831] font-semibold">
                  <p>Subtotal:</p>
                  <p>${subTotalPrice.toFixed(2)}</p>
                </div>
                <div className="flex flex-row items-center justify-between text-xl md:text-3xl font-[#1F0831] font-semibold">
                  <p>Shipping:</p>
                  <p>$5.00</p>
                </div>
                <div className="flex flex-row items-center justify-between text-xl md:text-3xl font-[#1F0831] font-semibold">
                  <p>Tax(8%):</p>
                  <p>${tax.toFixed(2)}</p>
                </div>
                <div className="flex flex-row items-center justify-between text-xl md:text-3xl font-[#1F0831] font-semibold">
                  <p>Discount:</p>
                  <p>${discount.toFixed(2)}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center justify-between text-xl md:text-3xl font-[#1F0831] font-bold">
                  <p>Grand Total:</p>
                  <p>${(grandTotal + tax - discount + 5).toFixed(2)}</p>
                </div>
                <button
                  onClick={toggleMenu}
                  className="bg-[#1F0831] hover:scale-105 transition-all mt-8 text-xl md:text-2xl text-[#ffffff] px-10 py-4 rounded-full hover:bg-[#3c1359] active:bg-[#621a96] w-full"
                >
                  Place Order
                </button>
                <motion.div
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={menuVariants}
                  className="absolute bottom-10 right-10 z-50 w-48 flex flex-row items-center justify-center bg-white shadow-lg rounded-lg p-4"
                >
                  <i className="fa-solid fa-check bg-[#1F0831] rounded-full p-2 py-1 text-white text-lg"></i>
                  <p className="text-[#1F0831] text-xl ml-2">Thank you!</p>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
