import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createContext, useState, useEffect } from "react";
import { resolveProjectReferencePath } from "typescript";
const Context = createContext();

export default function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState("");

  const url =
    selection === "categories"
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${selection}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [selection]);

  function handleCart(id) {
    items?.map((item) =>
      item.id === id ? setCartItems((prev) => [...prev, item]) : item
    );
    setCount((prev) => prev + 1);
  }

  return (
    <Context.Provider
      value={{ count, handleCart, items, selection, setSelection, setItems }}
    >
      <NavBar />
      <Home />
    </Context.Provider>
  );
}

export { Context };
