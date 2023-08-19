import React, { useContext } from "react";
import { Context } from "../App";

export default function Product({ product }) {
  const { handleCart } = useContext(Context);

  return (
    <div className="h-15 flex flex-col text-cyan-900 border-1px rounded p-3">
      <img src={product?.image} className="mb-5 h-auto" />
      <p className="capitalize">
        <span className="font-bold">Catergory: </span>
        {product?.category}
      </p>
      <p>
        <span className="font-bold">Title: </span>
        {product?.title}
      </p>
      <p className="font-bold">
        <span className="font-bold">Price: </span>
        {product?.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <button
        className="text-white bg-cyan-950 rounded w-20 cursor-pointer"
        onClick={handleCart}
      >
        + Cart
      </button>
    </div>
  );
}
