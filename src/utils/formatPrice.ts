export function formatPrice(price: number) {
  return Number(price).toLocaleString("es-GT", {
    style: "currency",
    currency: "GTQ",
  });
}
