import React from "react";
import { emitter } from "./parent";

export const Comp2 = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };

    const onDecrement = () => {
      setCount((count) => count - 1);
    };

    emitter.on("inc.", onIncrement);
    emitter.on("dec.", onDecrement);

    return () => {
      emitter.off("inc.", onIncrement);
      emitter.off("dec.", onDecrement);
    };
  }, []);

  return <div>#: {count}</div>;
};
