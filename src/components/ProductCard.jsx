import { formatCurrency } from "../utils/format";

export default function ProductCard({ product, onAdd, inCart }) {
  const hasOffer = product.offerPrice < product.price;

  // Tarjeta individual de producto con CTA sensible al estado del carrito.
  return (
    <article className="card" role="group" aria-label={product.name}>
      <img
        src={product.image}
        alt={`Imagen de ${product.name}`}
        width="100%"
        className="product-card-image"
      />

      <header className="row product-card-header">
        <h3 className="product-card-title">{product.name}</h3>
        {hasOffer && <span className="badge" aria-label="Producto en oferta">Oferta</span>}
      </header>

      <p className="muted product-card-description">{product.description}</p>

      <p className="price product-card-price">
        {formatCurrency(product.offerPrice)}
        {hasOffer && <del>{formatCurrency(product.price)}</del>}
      </p>

      <button
        className={`btn ${inCart ? "btn-in-cart" : ""}`.trim()}
        onClick={() => !inCart && onAdd(product)}
        aria-label={inCart ? `${product.name} ya está en el carrito` : `Agregar ${product.name} al carrito`}
        disabled={inCart}
      >
        {inCart ? "✅ En el carrito" : "➕ Agregar"}
      </button>
    </article>
  );
}
