import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <div className="items-center bg-[#1F0831] p-3">
      <div className="flex flex-row items-center justify-between px-5 md:px-44">
        <div>
          <NavLink to="/" className="flex flex-row items-center">
            <img className="w-[60px]" src={Logo} alt="Logo" />
            <h1 className="text-[#751CB4] text-4xl font-bold">SENTI</h1>
          </NavLink>
            <p className="text-[#D1B3C4] text-2xl ml-3 my-5">Let's Socialize!!!</p>
          <div className="cursor-pointer flex flex-row items-center text-[#D1B3C4] text-3xl gap-4 ml-3">
            <i className="cursor-pointer fa-brands fa-instagram text-[#D1B3C4]"></i>
            <i className="cursor-pointer fa-brands fa-square-facebook text-[#D1B3C4]"></i>
            <i className="cursor-pointer fa-brands fa-square-twitter text-[#D1B3C4]"></i>
            <i className="cursor-pointer fa-brands fa-youtube text-[#D1B3C4]"></i>
          </div>
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
      <p className="text-[#D1B3C4] text-[14px] text-center border-t border-[#D1B3C4] pt-3 mt-8">
        Copyright © 2024 Senti. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
