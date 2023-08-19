import React, { useState, useEffect } from "react";
import Product from "./Product";
export default function Home() {
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState("");

  const url =
    selection === "categories"
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${selection}`;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
    }
    fetchData();
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
      <div className="bg-cyan-950 h-50 flex flex-col p-3 justify-between items-center gap-5 text-white fixed mt-14 w-full">
        <select
          name=""
          id=""
          className="bg-cyan-950 text-center"
          onChange={handleSelect}
        >
          <option value="categories">Select Category</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="p-10 flex flex-col items-start pt-40">{elements}</div>
    </>
  );
}
