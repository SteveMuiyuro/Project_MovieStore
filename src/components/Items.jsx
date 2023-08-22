import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "../App";

export default function Items() {
  const { items } = useContext(Context);

  const elements = items.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return (
    <div className="p-10 flex flex-col items-start pt-40 lg:grid grid-cols-3 gap-5">
      {elements}
    </div>
  );
}
