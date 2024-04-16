import React from "react";
import axiosClient from "../axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axiosClient.get(`/api/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);
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
