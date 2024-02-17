import React from "react";

function List(props) {
  return (
    <div
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      <li>{props.items}</li>
    </div>
  );
}

export default List;
