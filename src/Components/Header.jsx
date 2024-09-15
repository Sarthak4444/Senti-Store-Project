import React from "react";
import Logo from "../Assets/Logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {

  const [ham, setHam] = useState(false);

  return (
    <>
    <div className={`${ham ? "absolute" : "hidden"} md:hidden z-30`}>
      <div className="w-[100vw] h-[100vh]  p-10  bg-[#3c1b52f9] gap-4 text-xl flex flex-col items-center justify-center">
      <p className="text-3xl text-[#751CB4]">MENU</p>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline" : ""} text-[#b090a2]`
          }
          to="/"
          onClick={() => setHam(!ham)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline" : ""} text-[#b090a2]`
          }
          to="/store"
          onClick={() => setHam(!ham)}
        >
          Store
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline" : ""} text-[#b090a2]`
          }
          to="/wishlist"
          onClick={() => setHam(!ham)}
        >
          Wishlist
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline" : ""} text-[#b090a2]`
          }
          to="/cart"
          onClick={() => setHam(!ham)}
        >
          Cart
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "underline" : ""} text-[#b090a2]`
          }
          to="/about"
          onClick={() => setHam(!ham)}
        >
          About
        </NavLink>
        <button className="text-[#D1B3C4] text-3xl active:bg-[#3c1359]" onClick={() => setHam(!ham)}><i className="fa-regular fa-circle-xmark"></i></button>
       </div>
    </div>
      <div className="flex sticky top-0 z-20 flex-row items-center justify-between bg-[#1F0831] p-3 px-8">
        <button onClick={() => setHam(!ham)} className="md:hidden">
        <i className="fa-solid fa-bars text-[#D1B3C4] text-xl"></i>
        </button>
        <NavLink to="/" className="flex flex-row items-center">
          <img className="w-[60px]" src={Logo} alt="Logo" />
          <h1 className="text-[#751CB4] text-4xl font-bold">SENTI</h1>
        </NavLink>
        <div className="md:flex flex-row items-center hidden md:static text-[#D1B3C4] text-2xl gap-4 ">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline" : ""} active:text-[#b090a2]`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline" : ""} active:text-[#b090a2]`
            }
            to="/store"
          >
            Store
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline" : ""} active:text-[#b090a2]`
            }
            to="/wishlist"
          >
            Wishlist
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline" : ""} active:text-[#b090a2]`
            }
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "underline" : ""} active:text-[#b090a2]`
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div className="flex flex-row items-center">
          <button>
            <i className="fa-solid fa-circle-user text-[#D1B3C4] text-[29px]"></i>
          </button>
        </div>
      </div>
      <div className="bg-[#ffa24a] overflow-hidden">
        <div className="element inline-block whitespace-nowrap lg:text-[18px] text-[12px] font-medium tracking-widest font-sans align-middle text-center">
          GET 40% DISCOUNT ON A MIN ORDER OF $399
        </div>
      </div>
    </>
  );
}

export default Header;
