export default function Cart({ items, onAdd, onRemove, onSetQty, total }) {
    if (items.length === 0) {
      return <div className="container empty">Tu carrito está vacío. ¡Agrega dulces! 🧁</div>;
    }
  
    return (
      <section className="container">
        <h2>Carrito</h2>
        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
          {items.map(it => (
            <article key={it.id} className="card">
              <div className="row">
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <img src={it.image} alt="" width="72" height="54" style={{ borderRadius: 8, objectFit: "cover" }} />
                  <div>
                    <strong>{it.name}</strong>
                    <div className="muted">
                      ${it.offerPrice.toLocaleString("es-CL")} c/u
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <label className="muted" style={{ marginRight: 6 }} htmlFor={`qty-${it.id}`}>Cant.</label>
                  <input
                    id={`qty-${it.id}`}
                    className="input-qty"
                    type="number"
                    min={1}
                    value={it.quantity}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (Number.isFinite(val) && val >= 1) onSetQty(it.id, val);
                    }}
                  />
                  <button className="btn secondary" onClick={() => onRemove(it.id)} aria-label={`Quitar 1 ${it.name}`}>
                    ➖
                  </button>
                  <button className="btn" onClick={() => onAdd(it)} aria-label={`Agregar 1 ${it.name}`}>
                    ➕
                  </button>
                </div>
              </div>
  
              <div className="row" style={{ marginTop: 10 }}>
                <span className="muted">Subtotal</span>
                <strong>${(it.offerPrice * it.quantity).toLocaleString("es-CL")}</strong>
              </div>
            </article>
          ))}
        </div>
  
        <div className="card" style={{ marginTop: 16 }}>
          <div className="row">
            <span className="muted">Total</span>
            <strong className="price">${total.toLocaleString("es-CL")}</strong>
          </div>
        </div>
      </section>
    );
  }
  