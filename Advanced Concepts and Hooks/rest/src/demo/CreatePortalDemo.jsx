import { useState } from "react";
import { createPortal } from "react-dom";

export function CreatePortalDemo() {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => {
        console.log("Clicking");
      }}
      style={{ position: "absolute", marginTop: "200px" }}
    >
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>

      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div className="alert" onClick={onClose}>
      {children}
    </div>,
    document.getElementById("alert-holder")
  );
};
