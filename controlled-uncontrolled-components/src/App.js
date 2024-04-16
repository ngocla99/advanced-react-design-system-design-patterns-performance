import { UncontrolledModal } from "./components/uncontrolled-modal";
import { ControlledForm } from "./components/controlled-form";
import { UncontrolledForm } from "./components/uncontrolled-form";
import { ControlledModal } from "./components/controlled-modal";
import React from "react";
import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { UnControlledFlowDemo } from "./demo/uncontrolled-flow";
import { ControlledModalDemo } from "./demo/controlled-modal";
import { ControlledFlowDemo } from "./demo/controlled-flow";

function App() {
  return (
    <>
      <UncontrolledModal>Uncontrolled Modal</UncontrolledModal>
      <ControlledModalDemo />
      <UnControlledFlowDemo />
      <ControlledFlowDemo />
    </>
  );
}

export default App;
