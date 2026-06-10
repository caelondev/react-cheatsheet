import { useState } from "react";

function MyComponent() {
  let [name, setName] = useState("What is your name?");
  let [value, setValue] = useState();
  let handle = () => {
    setName(value);
  };

  return (
    <div>
      <p>{name}</p>
      <input
        placeholder="Enter your name"
        onChange={(e) => {
          if (e.target.value.length > 0) setValue("Hello, "+e.target.value);
        }}
      />
      <button onClick={handle}>Submit</button>
    </div>
  );
}

export default MyComponent;
