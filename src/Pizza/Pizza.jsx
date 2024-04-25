import { useState } from "react";
import PizzaSize from "./PizzaSize";
import PizzaToppings from "./PizzaToppings";
import PizzaCount from "./PizzaCount";
import PizzaTotal from "./PizzaTotal";

const Pizza = () => {
  const [size, setSize] = useState("sizeM");
  const [toppings, setToppings] = useState([]);
  const [count, setCount] = useState(1);

  const handleUpdateToppings = (selectedTopping) => {
    if (toppings.find((topping) => topping === selectedTopping)) {
      let newToppings = toppings.slice();
      newToppings = newToppings.filter(
        (topping) => topping !== selectedTopping
      );
      setToppings(newToppings);
    } else {
      setToppings([...toppings, selectedTopping]);
    }
  };

  return (
    <div>
      <PizzaSize
        onSelectSize={(selectedSize) => {
          setSize(selectedSize);
        }}
      />
      <PizzaToppings
        onUpdateToppings={(topping) => handleUpdateToppings(topping)}
      />
      <PizzaCount onUpdateCount={(count) => setCount(count)} />

      <PizzaTotal
        size={size}
        toppingCount={toppings.length}
        pizzaCount={count}
      />
    </div>
  );
};

export default Pizza;
