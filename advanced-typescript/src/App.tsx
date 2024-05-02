import "./App.css";
import PassingStateDemo from "./demo/PassingStateDemo";
import { UseStateDemo } from "./demo/UseStateDemo";
import WithoutInitialStateDemo from "./demo/WithoutInitialStateDemo";

function App() {
  return (
    <main className="flex items-center h-full place-content-center bg-cyan-900">
      {/* <UseStateDemo /> */}
      {/* <WithoutInitialStateDemo /> */}
      <PassingStateDemo />
    </main>
  );
}

export default App;
