# 🍰 Pastelería Delicias Petra

Sumativa N°3 – Semana 8 de **Frontend I (DUOC)**. Este caso práctico consolida el uso de **React + Vite** para construir un eCommerce de pastelería que maneja estados, efectos secundarios y renderizado condicional, cumpliendo la pauta solicitada por la cátedra.

**Sitio desplegado:** https://lilytapia.github.io/FRONTEND-SUM3/

---

## 🎯 Objetivo de la entrega

Aplicar buenas prácticas de desarrollo frontend al:

- Gestionar estados con `useState` para catálogo, carrito y vistas interactivas.
- Simular la carga de datos mediante `useEffect` y un servicio asincrónico.
- Implementar renderizado condicional para mensajes, estilos y CTA dinámicos.
- Mantener una estructura clara de carpetas, utilidades reutilizables y comentarios puntuales.
- Publicar el resultado en GitHub Pages.

---

## ✨ Funcionalidades clave

- **Catálogo dinámico:** los productos se cargan simulando una API y se agrupan automáticamente por categoría.
- **Filtros por pestañas:** el usuario navega entre “Todas”, “Galletas glaseadas”, “Tortas” y “Propuestas festivos”.
- **Carrito interactivo:** sumar/restar unidades, ingresar cantidades manualmente, vaciar con confirmación y ver el total actualizado.
- **Botones sensibles al estado:** el CTA cambia a “En el carrito” cuando un producto ya fue agregado.
- **Estados visibles:** indicadores para carga inicial, errores de catálogo y listas vacías.
- **Diseño responsive:** estilos centralizados en `src/styles.css`, optimizados para móviles, tablets y desktop.

---

## 🧱 Arquitectura y organización

```
src/
├── assets/              # Imágenes de productos y logotipos
├── components/          # Componentes reutilizables (Navbar, ProductList, ProductCard, Cart)
├── data/                # Fuente local de productos (mock de catálogo)
├── utils/               # Helpers reutilizables (servicio de productos, formateo moneda)
├── styles.css           # Hoja de estilos globales
├── main.jsx             # Punto de entrada de React
└── App.jsx              # Composición principal de la aplicación
```

### Hooks y lógica destacada

- `App.jsx`
  - `useState` para productos, estados de carga/error, carrito y categoría activa.
  - `useEffect` que simula una petición HTTP (`fetchProducts`) con limpieza en desmontaje.
  - `useMemo` para contar ítems del carrito, calcular el total y derivar categorías únicas.
- `ProductList.jsx`
  - Detecta estados de carga, error o catálogo vacío y genera el listado principal.
- `ProductCard.jsx`
  - Renderizado condicional del botón según si el producto está en el carrito.
- `Cart.jsx`
  - Mensaje cuando el carrito está vacío y subtotales formateados.

---

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES2023), HTML5 y CSS3
- [gh-pages](https://www.npmjs.com/package/gh-pages) para despliegue

---

## 🚀 Configuración y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/LilyTapia/FRONTEND-SUM3.git
cd FRONTEND-SUM3

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → abre http://localhost:5173
```

### Build de producción

```bash
npm run build
```

Los artefactos quedan en `dist/`.

### Despliegue en GitHub Pages

```bash
npm run deploy
```

> El script ejecuta `npm run build` y publica `dist/` en la rama `gh-pages`. Verifica la URL tras unos minutos.

---

## ✅ Checklist de la pauta (Semana 8)

| Criterio | Evidencia |
| --- | --- |
| Gestión de estados con `useState` | `src/App.jsx` controla catálogo, flags de carga, carrito y categoría activa |
| Manejo de efectos con `useEffect` | `src/App.jsx` simula fetch asincrónico vía `fetchProducts` |
| Renderizado condicional | `ProductList.jsx`, `ProductCard.jsx`, `Cart.jsx` muestran mensajes/estilos según estado |
| Buenas prácticas | Estructura modular, utilidades (`utils/`), comentarios breves y estilos centralizados |
| Publicación | URL activa en GitHub Pages: https://lilytapia.github.io/FRONTEND-SUM3/ |

---

## 🧪 Pruebas manuales sugeridas

1. Abrir la app y confirmar el mensaje “Cargando productos…”.
2. Cambiar de categoría y revisar que la lista se actualice.
3. Agregar un producto, verificar el conteo en la navbar y el cambio de botón.
4. Modificar cantidades desde el carrito y observar subtotales/total.
5. Vaciar el carrito y comprobar el mensaje de estado.

---

## 📌 Próximas mejoras (ideas)

- Integrar autenticación básica para guardar carritos por usuario.
- Consumir una API real utilizando `fetch` o `axios`.
- Añadir pruebas unitarias con Vitest/React Testing Library.
- Incluir un control de cupones o descuentos por categoría.

---

**Autoría:** Liliana Tapia – Duoc UC.  
_Asignatura Frontend I – Sumativa 3, Semana 8._
