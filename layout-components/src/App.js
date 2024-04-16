import { Demo as DemoList } from "./layout/list/demo";
import { Demo as DemoModal } from "./layout/modal/demo";
import { Demo as DemoSplitScreen } from "./layout/split-screen/demo";

function App() {
  return (
    <>
      <DemoSplitScreen />
      <DemoList />
      <DemoModal />
    </>
  );
}

export default App;
