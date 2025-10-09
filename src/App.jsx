import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarApp from "./componentes/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import './App.css'

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
        <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;