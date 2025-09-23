import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'vestion_cart';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(product, qty = 1) {
    setItems(curr => {
      const idx = curr.findIndex(it => it.id === product.id);
      if (idx >= 0) {
        const copy = [...curr];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      // snapshot do produto (id, nome, preço, imagem)
      return [...curr, { id: product.id, name: product.name, price: product.price, image: product.image, qty }];
    });
  }

  function removeItem(id) { setItems(curr => curr.filter(it => it.id !== id)); }
  function setQty(id, qty) { setItems(curr => curr.map(it => it.id === id ? { ...it, qty: Math.max(1, qty) } : it)); }
  function clear() { setItems([]); }

  const totals = useMemo(() => {
    const totalQty = items.reduce((s, it) => s + it.qty, 0);
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    return { totalQty, subtotal };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, setQty, clear, ...totals }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
