import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggle, setToggle] = useState(false);

  const appClass = toggle ? "App dark" : "App light";

  function togglefn() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={togglefn}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
