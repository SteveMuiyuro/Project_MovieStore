import React, { useContext } from "react";
import { Context } from "../App";

export default function Checkout() {
  const { cartItems } = useContext(Context);
  const elements = cartItems.map((product) => (
    <div key={product.id} className="grid grid-cols-3 gap-3 p-3">
      <img src={product.image} className="h-20 w-auto" />
      <p>Qty: {product.qty}</p>
      <p className="font-bold">
        Price:{" "}
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  ));

  const totals = cartItems.reduce((total, curr) => {
    total += curr.price;
    return total;
  }, 0);

  return (
    <div className="pt-20 p-5">
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
    </div>
  );
}
