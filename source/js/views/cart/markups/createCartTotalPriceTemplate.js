export function createCartTotalPriceTemplate(totalPrice) {
  return `<span>Всего: ${totalPrice.toLocaleString(`ru-RU`)} ₽</span>`;
}
