import React from "react";

export const UseIdDemo = () => {
  return (
    <>
      <Form />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque
        distinctio culpa saepe numquam minima a aspernatur itaque amet soluta
        placeat, sunt, necessitatibus officia consectetur, deleniti accusamus
        vitae mollitia! Nisi sed doloribus consectetur esse modi explicabo quam
        delectus, laudantium rem nam ex odit cupiditate repellat architecto!
        Quod exercitationem tempora molestiae!
      </p>
      <Form />
    </>
  );
};

const Form = () => {
  const [email, setEmail] = React.useState();
  const id = React.useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={`${id}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </div>
  );
};
