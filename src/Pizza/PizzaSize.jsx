const PizzaSize = ({ onSelectSize }) => {
  return (
    <>
      <h2>サイズ</h2>
      <input
        type="radio"
        name="size"
        id="sizeM"
        value="sizeM"
        onClick={(e) => onSelectSize(e.target.value)}
      />
      <label htmlFor="sizeM">1380円（税抜）</label>
      <input
        type="radio"
        name="size"
        id="sizeL"
        value="sizeL"
        onClick={(e) => onSelectSize(e.target.value)}
      />
      <label htmlFor="sizeL">2380円（税抜）</label>
    </>
  );
};

export default PizzaSize;
