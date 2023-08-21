import React, { useContext, useState } from "react";
import { Context } from "../App";
import Checkout from "./Checkout";

export default function Cart() {
  const { cartItems, setHidden, setCartItems, setCount } = useContext(Context);
  const [hideCart, setHideCart] = useState(false);

  function returnToStore() {
    setHidden(false);
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((product) => product.id !== id));
    setCount((prev) => prev - 1);
  }

  function handleChange(event, id) {
    const { value } = event.target;

    setCartItems((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, qty: value } : product
      )
    );
  }

  function handleCheckout() {
    setHideCart(true);
  }

  const elements = cartItems?.map((item) => (
    <div
      key={item.id}
      className="flex flex-col justify-center items-center gap-3 mt-10 px-5"
    >
      <img src={item.image} className="h-52 w-52" />
      <p>
        <span className="font-bold">Name: </span>
        {item.title}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {item.description}
      </p>
      <div className="flex justify-center ">
        <p className="font-bold pr-5">
          {(item.price * item.qty).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <lable htmlFor="number">Qty:</lable>
        <input
          type="number"
          id="number"
          min="1"
          defaultValue={Number(1)}
          className=" text-center w-10"
          onChange={(event) => handleChange(event, item.id)}
        />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button
          className="bg-cyan-950 text-white py-2 px-4 rounded cursor-pointer"
          onClick={() => removeItem(item.id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  ));
  return (
    <>
      {!hideCart ? (
        <div className="flex justify-center items-center h-full">
          {cartItems.length > 0 ? (
            <div className="flex flex-col gap-5 justify-between  items-center pt-20 pb-10">
              {elements}
              <div className=" flex gap-5 justify-center items-center">
                <button
                  className="bg-cyan-950 px-4 py-2 text-white rounded cursor-pointer"
                  onClick={returnToStore}
                >
                  Continue Shopping
                </button>
                {cartItems.length && (
                  <button
                    className="bg-cyan-950 text-white py-2 px-4 rounded  cursor-pointer"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-lg pt-60 text-black font-bold">
                {" "}
                No Items in the Cart
              </p>
              <button
                className="bg-cyan-950 px-4 py-2 text-white rounded cursor-pointer"
                onClick={returnToStore}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      ) : (
        <Checkout />
      )}
    </>
  );
}
