import Logo_delicias_petra from "../assets/Logo_delicias_petra.png";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* Sección izquierda: Logo + Nombre */}
        <div className="brand">
          <img
            src={Logo_delicias_petra}
            alt="Logo Delicias Petra"
            className="brand-logo"
          />
          <span className="brand-name">Delicias Petra</span>
        </div>

        {/* Sección derecha: Carrito */}
        <div className="cart" aria-live="polite" aria-atomic="true">
          🛒 Carrito: <strong>{cartCount}</strong>{" "}
          {cartCount === 1 ? "producto" : "productos"}
        </div>
      </div>
    </nav>
  );
}
