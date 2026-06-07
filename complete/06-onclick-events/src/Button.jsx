function Button() {
  let handler = (e) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let w = Math.floor(Math.random() * 100) + 50;
    let h = Math.floor(Math.random() * 50) + 20;

    let color = `rgb(${r}, ${g}, ${b})`;
    e.target.style.backgroundColor = color;
    e.target.style.width = `${w}px`;
    e.target.style.height = `${h}px`;
  };

  let styles = {
    backgroundColor: "black",
    border: "None",
    color: "white",
    padding: "10px 20px",
    margin: "10px",
  };

  return (
    <button onClick={handler} style={styles}>
      Click Me!
    </button>
  );
}

export default Button;
