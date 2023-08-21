import React, { useContext, useState } from "react";
import { Context } from "../App";
import Payment from "./Payment";

export default function Checkout() {
  const { cartItems } = useContext(Context);
  const [hideCheckout, setHideCheckout] = useState(false);

  const elements = cartItems.map((product) => (
    <div key={product.id} className="grid grid-cols-3 gap-1 p-2">
      <img src={product.image} className="h-20 w-auto" />
      <p>Qty: {product.qty}</p>
      <p className="font-bold">
        Price:{" "}
        {(product.price * product.qty).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  ));

  const totals = cartItems.reduce((total, curr) => {
    total += curr.price * curr.qty;
    return total;
  }, 0);

  function handlePayment() {
    setHideCheckout(true);
  }

  return (
    <>
      {!hideCheckout ? (
        <div className="pt-20 p-4 flex flex-col gap-5 cursor-pointer">
          {elements}
          <hr className="border-cyan-950 border-2" />
          <div className="flex justify-end pr-3">
            <p className="font-bold">
              Total:{" "}
              {totals.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <button
            className="bg-cyan-950 text-white p-2 rounded"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>
      ) : (
        <Payment />
      )}
    </>
  );
}
