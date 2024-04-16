import React from "react";
import axiosClient from "../axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axiosClient.get("/api/current-user");
      setUser(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
