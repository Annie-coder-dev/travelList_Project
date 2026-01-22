export function Display({ addNewItem, deleteItem }) {
  console.log(addNewItem);

  return (
    <div className="display">
      <ul>
        {addNewItem.map((x, i) => (
          <li key={i}>
            <input type="checkbox" name="" id="" />
            <span>{x.amount}</span>
            <span>{x.item}</span>
            {/* <span>&times;</span> */}
            <button onClick={() => deleteItem(x.item)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
