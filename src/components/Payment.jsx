import React, { useState, useContext } from "react";
import Confirmation from "./Confirmation";
import { Context } from "../App";

export default function Payment() {
  const { setCount } = useContext(Context);
  const [firstname, setFirstName] = useState("");
  const [hidePayment, setHidePayment] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setFirstName(value);
  }

  function handlePayment(e) {
    e.preventDefault();
    setHidePayment(true);
    setCount(0);
  }

  return (
    <>
      {!hidePayment ? (
        <div className="h-screen flex flex-col justify-center items-center text-cyan-950">
          <p className=" pt-40 -pb-30 font-bold text-2xl">
            Enter Payment Details:
          </p>
          <form
            onSubmit={handlePayment}
            className="grid grid-cols-[1fr, 2fr] text-cyan-950 gap-4 p-5 place-content-center h-screen"
          >
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              className="bg-cyan-50 py-2 px-4 text-cyan-950 rounded text-center"
              placeholder="Joe"
              onChange={handleChange}
              value={firstname}
            />
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              className="bg-cyan-50 py-2 px-4 text-cyan-950 rounded text-center"
              placeholder="Doe"
            />
            <label htmlFor="card">Card Number:</label>
            <input
              type="text"
              id="card"
              className="bg-cyan-50 py-2 px-4 text-cyan-950 rounded text-center"
              placeholder="4452 **** **** 5265"
            />
            <label htmlFor="date">Expiry Date</label>
            <input
              type="date"
              id="date"
              className="bg-cyan-50 py-2 px-4 text-cyan-950 rounded text-center"
              placeholder="8/22"
            />
            <button className="col-span-2 bg-cyan-950 rounded cursor-pointer text-white py-2 px-4 mt-10">
              Pay
            </button>
          </form>
        </div>
      ) : (
        <Confirmation name={firstname} />
      )}
    </>
  );
}
