import { useState } from "react";

function Updater() {
  let [value, setValue] = useState(0);
  let callback = () => {
    setValue((v) => v + 1);
    setValue((v) => v + 1);
    setValue((v) => v + 1);
  };

  return <></>;
}

export default Updater;
