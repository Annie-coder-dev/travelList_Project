import { useState } from "react";
import { toast } from "react-toastify";
import { Display } from "./Display";
import Form from "./Form";

export default function Main() {
  const [listOfItems, setListOfItems] = useState([]);

  function handleAddNewItem(newItem) {
    const exist = listOfItems.find((x) => x.item == newItem.item);

    if (exist?.item) return toast.error(`Item ${newItem.item} already exist!`);
    setListOfItems([...listOfItems, newItem]);
    toast.success("Item added successfully");
  }
  
  function handleRemoveItem(item) {
    const updatedList = listOfItems.filter((x) => x.item !== item);
    setListOfItems(updatedList);
    toast.warn(`Item ${item} has been deleted`)
  }

  return (
    <main>
      <Form addNewItem={handleAddNewItem} />
      <Display addNewItem={listOfItems} deleteItem={handleRemoveItem} />
    </main>
  );
}
