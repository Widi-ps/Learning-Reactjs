import React, { useState } from "react";
import List from "./ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItems(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems, index) => (
            <List
              key={index}
              id={index}
              items={todoItems}
              onCheck={deleteItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
