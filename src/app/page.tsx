"use client";

import AddToCart from "@/components/AddToCart";
import Navbar from "@/components/Navbar";
import { createContext, useState } from "react";

export const cartContext = createContext({
  totalCart: 0,
  setTotalCart: (totalCart: number) => {},
});

export default function Home() {
  const [totalCart, setTotalCart] = useState(5);

  return (
    <cartContext.Provider value={{ totalCart, setTotalCart }}>
      <main className="min-h-screen">
        <Navbar />
        <h1>Hello World</h1>
        <AddToCart />
      </main>
    </cartContext.Provider>
  );
}
