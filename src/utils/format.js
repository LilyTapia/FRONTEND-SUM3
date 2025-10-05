const clpFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

// Formatea valores numéricos como CLP (ej: $12.500)
export function formatCurrency(value) {
  return clpFormatter.format(Number(value) || 0);
}
