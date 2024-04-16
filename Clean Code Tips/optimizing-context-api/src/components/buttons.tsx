import { useCartDispatchContext } from "./cart-context";

const Buttons = () => {
  const dispatch = useCartDispatchContext();
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </button>
    </div>
  );
};

export default Buttons;
