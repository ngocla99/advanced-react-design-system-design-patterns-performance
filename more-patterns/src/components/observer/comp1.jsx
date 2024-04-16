import { emitter } from "./parent";

export const Comp1 = () => {
  const onIncrementCounter = () => {
    emitter.emit("inc.");
  };

  const onDecrementCounter = () => {
    emitter.emit("dec.");
  };

  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
};
