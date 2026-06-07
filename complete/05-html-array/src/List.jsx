function List() {
  const datas = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Foo" },
    { id: 5, name: "Bar" },
  ];

  datas.sort((a, b) => a.name.localeCompare(b.name));

  let listItems = datas.map((i) => <li key={i.id}>Name: {i.name}</li>);
  return <ol>{listItems}</ol>;
}

export default List;
