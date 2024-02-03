import React from "react";
import Card from "./Card";
import Contacts from "../contacts";
import Avatar from "./Avatar.jsx";

function createCard(props) {
  return (
    <Card
      key={props.id}
      id={props.id}
      name={props.name}
      img={props.imgURL}
      tel={props.phone}
      email={props.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/69189062?s=400&u=7746e699fe1b71f1faad015097a226de324e798e&v=4" />
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
