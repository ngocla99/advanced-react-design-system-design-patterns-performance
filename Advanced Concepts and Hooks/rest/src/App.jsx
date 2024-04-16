import "./App.css";
import { CreatePortalDemo } from "./demo/CreatePortalDemo";
import { ForwardRefDemo } from "./demo/ForwardRefDemo";
import { KeysDemo } from "./demo/KeysDemo";
import { UseIdDemo } from "./demo/UseIdDemo";
import { UseLayoutEffectDemo } from "./demo/UseLayoutEffectDemo";
import { UseCallbackDemo } from "./demo/UseCallbackDemo";
import { UseImperativeHandle } from "./demo/UseImperativeHandle";
import { UseDeferredValue } from "./demo/UseDeferredValue";
import { UseTransitionDemo } from "./demo/UseTransitionDemo";

function App() {
  return (
    <div>
      {/* <CreatePortalDemo />
      <ForwardRefDemo />
      <KeysDemo /> */}
      {/* <UseLayoutEffectDemo /> */}
      {/* <UseIdDemo /> */}
      {/* <UseCallbackDemo /> */}
      {/* <UseImperativeHandle /> */}
      {/* <UseDeferredValue /> */}
      <UseTransitionDemo />
    </div>
  );
}

const Child = () => {
  throw new Error("Error in Component");
  return <h1>Child Component</h1>;
};

export default App;
