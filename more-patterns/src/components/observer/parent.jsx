import mitt from "mitt";
import { Comp1 } from "./comp1";
import { Comp2 } from "./comp2";

export const emitter = mitt();

export const ParentComponent = () => {
  return (
    <>
      <Comp1 />
      <Comp2 />
    </>
  );
};
