import { useMemo, useState } from "react";
import "./styles.css";
import products, { categories } from "./data/products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import logo from "./assets/Logo_delicias_petra.png";

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeCat, setActiveCat] = useState("Todas");

  const cartCount = useMemo(() => cart.reduce((acc, it) => acc + it.quantity, 0), [cart]);
  const total = useMemo(() => cart.reduce((acc, it) => acc + it.offerPrice * it.quantity, 0), [cart]);

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(it => it.id === product.id);
      if (found) return prev.map(it => it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it);
      return [...prev, { id: product.id, name: product.name, offerPrice: product.offerPrice, image: product.image, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart(prev => {
      const found = prev.find(it => it.id === productId);
      if (!found) return prev;
      if (found.quantity > 1) return prev.map(it => it.id === productId ? { ...it, quantity: it.quantity - 1 } : it);
      return prev.filter(it => it.id !== productId);
    });
  }

  function setQuantity(productId, qty) {
    setCart(prev => prev.map(it => it.id === productId ? { ...it, quantity: qty } : it));
  }

  const filtered = useMemo(() => {
    if (activeCat === "Todas") return products;
    return products.filter(p => p.category === activeCat);
  }, [activeCat]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main style={{ paddingTop: 12 }}>
        <section className="container">
          <div className="hero">
            <img
              src={logo}
              alt="Logo Pastelería Delicias Petra"
              className="hero-logo"
            />

            <h1>Delicias Petra</h1>
            <p className="subtitle">
              Galletas glaseadas, tortas personalizadas y pasteles hechos con amor ♥
            </p>
          </div>

          <div className="tabs" role="tablist" aria-label="Categorías">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab ${activeCat === cat ? "active" : ""}`}
                role="tab"
                aria-selected={activeCat === cat}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>


        <ProductList products={filtered} onAdd={addToCart} />
        <Cart
          items={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onSetQty={setQuantity}
          total={total}
        />
      </main>
    </>
  );
}
