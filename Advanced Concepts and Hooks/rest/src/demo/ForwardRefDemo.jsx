import React, { forwardRef } from "react";

export const ForwardRefDemo = () => {
  const inputRef = React.useRef();

  function submitHandler(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <Input ref={inputRef} />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export const Input = forwardRef((props, ref) => {
  const inputRef1 = React.useRef();
  const inputRef2 = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      sayHello: () => alert("hellooo!"),
      input1: inputRef1.current,
      input2: inputRef2.current,
    };
  });

  return (
    <>
      <input ref={inputRef1} type="text" className="text-input" {...props} />
      <input ref={inputRef2} type="text" className="text-input" {...props} />
    </>
  );
});
