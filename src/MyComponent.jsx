import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const updateName = () => {
    setName(value);
    setValue("");
  };

  return (
    <div>
      <p>Name: {name}</p>

      <input
        placeholder="Enter name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={updateName}>Set name</button>
    </div>
  );
}

export default MyComponent;
