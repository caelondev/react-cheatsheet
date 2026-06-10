import { useState } from "react";

function ColorPicker() {
  let [color, setColor] = useState("#FFFFFF")

  let handleColorChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-picker-preview" style={{ backgroundColor: color }}>
        <p>{color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker;
