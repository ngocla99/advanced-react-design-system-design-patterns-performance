import { Recursive } from "../components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: {
        innerInnerInnerKey1: "innerInnerInnerValue1",
        innerInnerInnerKey2: "innerInnerInnerValue2",
      },
    },
  },
  key3: "value3",
};

export function RecursiveDemo() {
  return (
    <>
      <Recursive data={myNestedObject} />
    </>
  );
}
