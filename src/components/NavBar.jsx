import React, { useContext } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { Context } from "../App";
import logo from "../../public/logo.png";

export default function NavBar() {
  const { count, displayCart, setHidden } = useContext(Context);

  function handleClick() {
    setHidden(false);
  }
  return (
    <div className="bg-cyan-950 p-5 text-white text-xl flex justify-between items-center fixed w-full">
      <img
        src={logo}
        className="h-16 w-18 cursor-pointer"
        onClick={handleClick}
      />
      <div className="relative">
        <PiShoppingCartThin onClick={displayCart} className="cursor-pointer" />
        <div className="absolute h-5 w-5 bg-white text-cyan-950 rounded-full right-2 top-3 flex justify-center items-center text-sm">
          {count}
        </div>
      </div>
    </div>
  );
}
