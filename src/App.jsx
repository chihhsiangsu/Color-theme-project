import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { ColorForm } from "./Components/Color/ColorForm/ColorForm.jsx";
import { uid } from "uid";
import "../src/App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1 className="app-title">Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => {
        return (
          <Color key={color.id} color={color} onDelete={handleDeleteColor} />
        );
      })}
    </>
  );
}

export default App;
