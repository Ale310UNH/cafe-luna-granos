
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Header from './pages/header/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "./componentes/navBar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((acc, i) => acc + i.qty, 0);

  return (
    <BrowserRouter>
      <NavbarApp cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu onAdd={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;