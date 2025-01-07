import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [classe, setClasse] = useState("red");

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>

      <button className={classe} onClick={() => {
        setClasse(classe === "red" ? "blue" : "red")
      }}>Change to {classe === "red" ? "blue" : "red"}</button>

       <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
