import React from "react";

export const UseDeferredValue = () => {
  const [keyword, setKeyword] = React.useState("");

  const defferedKeyword = React.useDeferredValue(keyword);

  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={defferedKeyword} />
    </>
  );
};

const HeavyComponent = React.memo(({ keyword }) => {
  const init = performance.now();
  while (init > performance.now() - 100) {
    // Slowing down the component on purpose
  }

  return (
    <>
      <h2>I am a slow component</h2>
      {keyword}
    </>
  );
});
