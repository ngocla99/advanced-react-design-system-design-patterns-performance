import React from "react";

export const UseCallbackDemo = () => {
  const [showInput, setShowInput] = React.useState(false);
  const realInputRef = React.useRef();
  const inputRef = React.useCallback((input) => {
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShowInput((s) => !s)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
};
