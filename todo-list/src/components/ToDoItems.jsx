import React, { useState } from "react";

function List(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleClick() {
    setIsCompleted(!isCompleted);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {props.items}
      </li>
    </div>
  );
}

export default List;
