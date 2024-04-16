import React from "react";
import axiosClient from "../axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axiosClient.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};
