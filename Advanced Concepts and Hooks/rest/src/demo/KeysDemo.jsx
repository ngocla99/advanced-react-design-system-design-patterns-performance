import React from "react";

export const KeysDemo = () => {
  const [changeShirts, setChangeShirts] = React.useState();

  return (
    <div>
      {changeShirts ? <span>Shirt counts: </span> : <span>Shoes counts: </span>}
      <br />
      <input type="text" key={changeShirts ? "shorts" : "shoes"} />
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
};
