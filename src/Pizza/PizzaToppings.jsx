const PizzaToppings = ({ onUpdateToppings }) => {
  const toppings = [
    "onion",
    "cheese",
    "pepper",
    "ham",
    "spinach",
    "pepperoni",
    "egglplant",
    "sausage",
  ];

  return (
    <>
      <h2>トッピング：一つにつきM200円、L300円</h2>
      {toppings.map((topping, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={topping}
            value={topping}
            onChange={(e) => onUpdateToppings(e.target.value)}
          />
          <label htmlFor={topping}>{topping}</label>
        </div>
      ))}
    </>
  );
};

export default PizzaToppings;
