import React from "react";
import Card from "./Card";
import emoji from "../emoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emoji.map((props) => (
          <Card
            key={props.id}
            emoji={props.emoji}
            title={props.name}
            description={props.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
