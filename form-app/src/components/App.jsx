import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form>
        <input onSubmit={handleClick}
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        ></input>
        <button
          type="submit"
          style={{
            backgroundColor: isMouseOver ? "black" : "white",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
