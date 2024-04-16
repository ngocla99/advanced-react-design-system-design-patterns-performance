import React from "react";

export const ControlledForm = () => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (name.length < 3) {
      setError("name cannot be empty!");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
