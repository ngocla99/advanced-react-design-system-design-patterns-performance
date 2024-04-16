import React from "react";

const LazyLoader = (props) => {
  const { show = false, delay = 0 } = props;
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

  return showLoader ? "Loading..." : props.default;
};

export default LazyLoader;
