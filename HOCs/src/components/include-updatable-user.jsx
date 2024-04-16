import axios from "axios";
import React from "react";

export const includeUpdatableUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = React.useState(null);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
