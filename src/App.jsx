import { useEffect, useMemo, useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import logo from "./assets/Logo_delicias_petra.png";
import { fetchProducts } from "./utils/productService";

export default function App() {
  // Estados principales: catálogo, indicadores de carga y carrito.

  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [cart, setCart] = useState([]);
  const [activeCat, setActiveCat] = useState("Todas");

  // Carga inicial del catálogo simulando una petición externa.
  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        setIsLoadingProducts(true);
        setLoadError(null);
        const data = await fetchProducts();
        if (!cancelled) {
          setProducts(data);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Error cargando productos", error);
          setProducts([]);
          setLoadError("No pudimos cargar el catálogo. Inténtalo nuevamente más tarde.");
        }
      } finally {
        if (!cancelled) {
          setIsLoadingProducts(false);
        }
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  // Calculamos las categorías a partir de los productos recibidos.
  const categories = useMemo(() => {
    const unique = new Set(products.map((item) => item.category));
    return ["Todas", ...unique];
  }, [products]);

  const cartCount = useMemo(
    () => cart.reduce((acc, it) => acc + it.quantity, 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((acc, it) => acc + it.offerPrice * it.quantity, 0),
    [cart]
  );

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((it) => it.id === product.id);
      if (found) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          offerPrice: product.offerPrice,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => {
      const found = prev.find((it) => it.id === productId);
      if (!found) return prev;
      if (found.quantity > 1) {
        return prev.map((it) =>
          it.id === productId ? { ...it, quantity: it.quantity - 1 } : it
        );
      }
      return prev.filter((it) => it.id !== productId);
    });
  }

  function setQuantity(productId, qty) {
    setCart((prev) => {
      if (!Number.isFinite(qty) || qty <= 0) {
        return prev.filter((it) => it.id !== productId);
      }
      return prev.map((it) =>
        it.id === productId ? { ...it, quantity: qty } : it
      );
    });
  }

  // Productos que se muestran según la pestaña activa.
  const filtered = useMemo(() => {
    if (activeCat === "Todas") return products;
    return products.filter((p) => p.category === activeCat);
  }, [products, activeCat]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
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
            {categories.map((cat) => (
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

        <ProductList
          products={filtered}
          cartItems={cart}
          onAdd={addToCart}
          isLoading={isLoadingProducts}
          error={loadError}
          activeCategory={activeCat}
        />
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
