import { useEffect, useState } from "react";
import "./style.css";

const ShoppingCard = () => {
  const [items, setItems] = useState<number>(0);
  const [input, setInput] = useState<string | number>(items);

  useEffect(() => {
    setInput(items);
  }, [items]);

  return (
    <section className="counter-wrapper flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1 className="counter-title">Shopping Cart Items</h1>
      <p className="counter-value text-6xl">{items}</p>
      <div className="counter-buttons flex gap-2">
        <button
          className="decrement-button"
          onClick={() => setItems(items - 1)}
        >
          Decrease
        </button>
        <button className="reset-button" onClick={() => setItems(0)}>
          Reset
        </button>
        <button
          className="increment-button"
          onClick={() => setItems(items + 1)}
        >
          Increase
        </button>
      </div>
      <div className="counter-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setItems(+input);
          }}
        >
          <input
            type="number"
            value={input}
            // onChange={(e) => setInput(e.target.valueAsNumber)}
            onChange={(e) => setInput(e.target.value)}
            className="counter-input"
          />
          <button type="submit" className="update-button">
            Update Cart
          </button>
        </form>
      </div>
    </section>
  );
};

export default ShoppingCard;
