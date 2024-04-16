import { includeUpdatableResource } from "./include-updatable-resource";

export const UserInforFormV2 = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: e.target.value })}
        />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/2",
  "user"
);
