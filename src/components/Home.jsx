import React, { useState, useEffect } from "react";
import Product from "./Product";
export default function Home() {
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [selection]);

  function handleSelect(e) {
    const { value } = e.target;
    setSelection(value);
    const newSelection = items.filter((item) => item.category === selection);
    setItems(newSelection);
  }

  const elements = items.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return (
    <>
      <div className="bg-cyan-950 h-50 flex flex-col p-5 justify-between items-center gap-5 text-white">
        <select
          name=""
          id=""
          className="bg-cyan-950 text-center"
          onChange={handleSelect}
        >
          <option value="" selected>
            Select Category
          </option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Jewelery">Jewelery</option>
          <option value="Electronics">Electronics</option>
          <option value="Women's Clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="p-10 flex flex-col items-start">{elements}</div>
    </>
  );
}
