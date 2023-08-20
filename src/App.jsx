import "./index.css";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import { createContext, useState, useEffect } from "react";
import Cart from "./components/Cart";
import Items from "./components/Items";
const Context = createContext();

export default function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [selection, setSelection] = useState("");
  const [hidden, setHidden] = useState(false);

  const url =
    selection === ""
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

  function displayCart() {
    setHidden(true);
  }

  return (
    <Context.Provider
      value={{
        count,
        handleCart,
        items,
        selection,
        setSelection,
        setItems,
        cartItems,
        displayCart,
        setHidden,
        setCartItems,
        setCount,
        hidden,
      }}
    >
      <NavBar />
      {!hidden && <Search />}
      {!hidden && <Items />}
      {hidden && <Cart />}
    </Context.Provider>
  );
}

export { Context };
