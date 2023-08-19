import "./index.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createContext, useState } from "react";
const Context = createContext();

export default function App() {
  const [count, setCount] = useState(1);
  function handleCart() {
    setCount((prev) => prev + 1);
  }
  return (
    <Context.Provider value={{ count, handleCart }}>
      <NavBar />
      <Home />
    </Context.Provider>
  );
}

export { Context };
