import React, { useState } from "react";

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
          {items.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
