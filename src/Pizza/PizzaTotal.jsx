const PizzaTotal = ({ size, toppingCount, pizzaCount }) => {
  const sizePrice = size === "sizeM" ? 1380 : size === "sizeL" ? 2380 : null;
  const toppingPrice =
    size === "sizeM"
      ? 200 * toppingCount
      : size === "sizeL"
      ? 300 * toppingCount
      : null;

  const total = (sizePrice + toppingPrice) * pizzaCount;

  return <h2>この商品金額：{total}円（税抜）</h2>;
};

export default PizzaTotal;
