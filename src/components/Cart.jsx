export default function Cart({ items, onAdd, onRemove, onSetQty, total }) {
  // 📝 Carrito vacío
  if (items.length === 0) {
    return (
      <div className="container empty">
        Tu carrito está vacío. ¡Agrega dulces! 🧁
      </div>
    );
  }

  // 🧹 Vaciar carrito
  function handleClearCart() {
    if (confirm("¿Estás segura/o de vaciar todo el carrito?")) {
      items.forEach((it) => onSetQty(it.id, 0));
    }
  }

  // ✅ Simular checkout
  function handleCheckout() {
    alert("¡Gracias por tu compra en Delicias Petra!\nTu pedido ha sido registrado.");
  }

  return (
    <section className="container">
      <h2>Carrito</h2>

      <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
        {items.map((it) => (
          <article key={it.id} className="card">
            {/* Fila principal ahora tiene 'cart-row' para responsive */}
            <div className="row cart-row">
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img
                  src={it.image}
                  alt={`Foto de ${it.name}`}
                  width="72"
                  height="54"
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
                <div>
                  <strong>{it.name}</strong>
                  <div className="muted">
                    ${it.offerPrice.toLocaleString("es-CL")} c/u
                  </div>
                </div>
              </div>

              {/* Controles con clase 'cart-controls' para romper/apilar en móvil */}
              <div className="row cart-controls">
                <label
                  className="muted"
                  style={{ marginRight: 6 }}
                  htmlFor={`qty-${it.id}`}
                >
                  Cant.
                </label>
                <input
                  id={`qty-${it.id}`}
                  className="input-qty"
                  type="number"
                  min={1}
                  step={1}
                  inputMode="numeric"
                  value={it.quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (Number.isFinite(val) && val >= 1)
                      onSetQty(it.id, Math.floor(val));
                  }}
                  onBlur={(e) => {
                    const val = Number(e.target.value);
                    if (!Number.isFinite(val) || val < 1) onSetQty(it.id, 1);
                  }}
                />
                <button
                  className="btn secondary"
                  onClick={() => onRemove(it.id)}
                  aria-label={`Quitar 1 ${it.name}`}
                  disabled={it.quantity <= 1}
                  title={it.quantity <= 1 ? "Cantidad mínima: 1" : "Quitar 1"}
                >
                  ➖
                </button>
                <button
                  className="btn"
                  onClick={() => onAdd(it)}
                  aria-label={`Agregar 1 ${it.name}`}
                >
                  ➕
                </button>
              </div>
            </div>

            <div className="row" style={{ marginTop: 10 }}>
              <span className="muted">Subtotal</span>
              <strong>
                ${(it.offerPrice * it.quantity).toLocaleString("es-CL")}
              </strong>
            </div>
          </article>
        ))}
      </div>

      {/* Total + acciones */}
      <div className="card" style={{ marginTop: 16 }}>
        <div className="row" aria-live="polite" aria-atomic="true">
          <span className="muted">Total</span>
          <strong className="price">${total.toLocaleString("es-CL")}</strong>
        </div>
      </div>

      <div className="row" style={{ marginTop: 16, justifyContent: "space-between" }}>
        <button className="btn secondary" onClick={handleClearCart}>
          🧹 Vaciar carrito
        </button>
        <button className="btn" onClick={handleCheckout}>
          ✅ Finalizar pedido
        </button>
      </div>
    </section>
  );
}
