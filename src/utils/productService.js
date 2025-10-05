import products from "../data/products";

// Simula una solicitud HTTP para obtener productos del catálogo.
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // devolvemos una copia para evitar mutaciones accidentales
      resolve(products.map((item) => ({ ...item })));
    }, 700);
  });
}
