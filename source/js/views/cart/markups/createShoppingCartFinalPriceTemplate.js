export function createShoppingCartFinalPriceTemplate(card) {
  return `<span>${card.finalPrice.toLocaleString(`ru-RU`)} ₽</span>`;
}
