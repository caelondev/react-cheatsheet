import {useState} from 'react';

function MyComponent() {
  const [foods, setFoods] = useState(["apple", "banana", "orange"]);

  function handleAddFood() {
    const inp = document.querySelector('input');
    let newFood = inp.value.trim();

    if (inp.value === '') return

    inp.value = ''

    setFoods(f => [...f, newFood])
  }
  function handleRemoveFood() {
    setFoods(f => f.slice(0, -1))
  }

  return (
    <div>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <input text="text" placeholder='Enter food name' />
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={handleRemoveFood}>Remove Food</button>
    </div>
  )
}

export default MyComponent;
