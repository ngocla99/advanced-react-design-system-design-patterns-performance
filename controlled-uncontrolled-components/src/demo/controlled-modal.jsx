import React from "react";
import { ControlledModal } from "../components/controlled-modal";

export const ControlledModalDemo = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        {show ? "Hide Modal" : "Show Modal"}
      </button>
      <ControlledModal show={show} setShow={setShow}>
        Controlled Modal
      </ControlledModal>
    </>
  );
};
