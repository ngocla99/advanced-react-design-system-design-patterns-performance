import { useCartStateContext } from "./cart-context";

const Display = () => {
  const { count } = useCartStateContext();
  return <span className="span">{count}</span>;
};

export default Display;
