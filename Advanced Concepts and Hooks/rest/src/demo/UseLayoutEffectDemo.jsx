import React from "react";

export const UseLayoutEffectDemo = () => {
  const [show, setShow] = React.useState(false);
  const [top, setTop] = React.useState(0);
  const buttonRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (buttonRef.current === null || !show) return setTop(0);

    const { bottom } = buttonRef.current.getBoundingClientRect();
    setTop(bottom + 30);
  }, [show]);

  const now = performance.now();
  while (now > performance.now() - 100) {
    // Do somthing
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
        Show
      </button>

      {show && (
        <div
          className="tooltip"
          style={{ top: `${top}px`, position: "absolute" }}
        >
          Some text...
        </div>
      )}
    </>
  );
};
