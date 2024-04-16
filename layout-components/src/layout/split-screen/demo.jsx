import { SplitScreen } from "./components/split-screen";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

export function Demo() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={"Right"} />
      <RightSideComp title={"Left"} />
    </SplitScreen>
  );
}
