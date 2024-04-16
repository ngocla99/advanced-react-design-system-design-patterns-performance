import React from "react";
import { Input } from "./ForwardRefDemo";

export const UseImperativeHandle = () => {
  const inputRef = React.useRef();

  return (
    <>
      <Input type="text" ref={inputRef} />
      <button
        className="button"
        onClick={() => inputRef.current.input2.focus()}
      >
        Focus
      </button>
    </>
  );
};
