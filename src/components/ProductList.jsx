import ProductCard from "./ProductCard";


export default function ProductList({ products, onAdd }) {
  return (
    <section className="container">
      <h2>Productos</h2>
      <div className="grid products">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
