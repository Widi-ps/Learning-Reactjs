import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  // const [isMouseOver, setMouseOver] = useState(false);

  // function handleClick(event) {
  //   setHeadingText(name);
  //   event.preventDefault();
  // }

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((preValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: preValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: preValue.fName,
          lName: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
