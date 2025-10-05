import { useMemo } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  cartItems = [],
  onAdd,
  isLoading,
  error,
  activeCategory,
}) {
  // Conjunto rápido para saber qué productos ya están en el carrito.
  const cartIds = useMemo(
    () => new Set(cartItems.map((item) => item.id)),
    [cartItems]
  );

  // Texto adaptado para los mensajes de estado.
  const categoryLabel =
    activeCategory === "Todas"
      ? "el catálogo"
      : `la categoría "${activeCategory}"`;

  // Distintos estados vacíos según la fase de carga.
  if (isLoading) {
    return (
      <section className="container">
        <h2>Productos</h2>
        <div className="empty" role="status">Cargando productos...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container">
        <h2>Productos</h2>
        <div className="empty" role="alert">{error}</div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="container">
        <h2>Productos</h2>
        <div className="empty">No hay productos disponibles en {categoryLabel}.</div>
      </section>
    );
  }

  return (
    <section className="container">
      <h2>Productos</h2>
      <div className="grid products">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            inCart={cartIds.has(p.id)}
          />
        ))}
      </div>
    </section>
  );
}
