import React from "react";

export const LazyLoader = ({ show = false, delay = 0 }) => {
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    let timeout;
    if (!show) {
      setShowLoader(false);
      return;
    }

    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(true), delay);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);

  return showLoader ? <h3>Loading...</h3> : null;
};
