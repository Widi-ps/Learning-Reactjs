import React from "react";
import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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

  function handleFname(event) {
    const firstname = event.target.value;
    setFname(firstname);
  }

  function handleLname(event) {
    const lname = event.target.value;
    setLname(lname);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          onChange={handleFname}
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={handleLname}
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
