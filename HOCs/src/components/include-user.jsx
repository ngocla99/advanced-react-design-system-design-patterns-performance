/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
