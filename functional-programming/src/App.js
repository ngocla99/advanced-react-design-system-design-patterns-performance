import { CompositionDemo } from "./demo/composition-demo";
import { PartialDemo } from "./demo/partial-demo";
import { RecursiveDemo } from "./demo/recursive-demo";

function App() {
  return (
    <>
      <RecursiveDemo />
      <CompositionDemo />
      <PartialDemo />
    </>
  );
}

export default App;
