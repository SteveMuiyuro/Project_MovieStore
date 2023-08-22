import React, { useContext, useState } from "react";
import { Context } from "../App";

export default function Confirmation({ name }) {
  const { setHidden, setCartItems } = useContext(Context);
  const [hideConfrimation, setHideConfirmation] = useState(false);

  function handleClick() {
    setHideConfirmation(true);
    setCartItems([]);
    setHidden(false);
  }

  return (
    !hideConfrimation && (
      <div className="p-5 h-screen flex flex-col gap-5 justify-center items-center text-cyan-950">
        <p className="font-bold text-xl text-center md:text-2xl">
          Thanks for your payment {name}, your order has been booked for
          delivery.
        </p>

        <button
          className="bg-cyan-950 text-white py-2 px-4 rounded cursor-pointer md:text-xl"
          onClick={handleClick}
        >
          Shop Again
        </button>
      </div>
    )
  );
}
