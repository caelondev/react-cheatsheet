function Food() {
  let foods = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];

  return (
    <ul>
      {foods.map((food) => (
        <li>{food}</li>
      ))}
    </ul>
  );
}

export default Food;
