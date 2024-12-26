import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Cartes des joueurs FIFA</h1>
      <PlayersList />
    </div>
  );
}

export default App;

