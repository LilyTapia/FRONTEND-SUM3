export default function ProductCard({ product, onAdd }) {
    const hasOffer = product.offerPrice < product.price;
  
    return (
      <article className="card" role="group" aria-label={product.name}>
        <img
          src={product.image}
          alt={`Imagen de ${product.name}`}
          width="100%"
          style={{ borderRadius: 12, aspectRatio: "4/3", objectFit: "cover", marginBottom: 12 }}
        />
  
        <header className="row" style={{ alignItems: "start" }}>
          <h3 style={{ margin: 0 }}>{product.name}</h3>
          {hasOffer && <span className="badge" aria-label="Producto en oferta">Oferta</span>}
        </header>
  
        <p className="muted" style={{ marginTop: 8 }}>{product.description}</p>
  
        <p className="price" style={{ marginTop: 8 }}>
          ${product.offerPrice.toLocaleString("es-CL")}
          {hasOffer && <del>${product.price.toLocaleString("es-CL")}</del>}
        </p>
  
        <button className="btn" onClick={() => onAdd(product)} aria-label={`Agregar ${product.name} al carrito`}>
          ➕ Agregar
        </button>
      </article>
    );
  }
  