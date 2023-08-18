import React from "react";
import { PiShoppingCartThin } from "react-icons/pi";
export default function NavBar() {
  return (
    <div className="bg-cyan-950 p-5 text-white text-xl flex justify-between items-center">
      <h1>Logo</h1>
      <PiShoppingCartThin className="cursor-pointer" />
    </div>
  );
}
