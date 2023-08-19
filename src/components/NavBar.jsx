import React, { useContext } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { Context } from "../App";

export default function NavBar() {
  const { count } = useContext(Context);
  return (
    <div className="bg-cyan-950 p-5 text-white text-xl flex justify-between items-center fixed w-full">
      <h1>Logo</h1>
      <div className="relative">
        <PiShoppingCartThin className="cursor-pointer" />
        <div className="absolute h-5 w-5 bg-white text-cyan-950 rounded-full right-2 top-3 flex justify-center items-center text-sm">
          {count}
        </div>
      </div>
    </div>
  );
}
