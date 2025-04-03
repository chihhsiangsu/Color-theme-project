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

  function handleUpdateColor(id, updateColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updateColor } : color
      )
    );
  }

  return (
    <>
      <h1 className="app-title">Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length > 0
        ? colors.map((color) => (
            <Color
              key={color.id}
              color={color}
              onDelete={handleDeleteColor}
              onUpdate={handleUpdateColor}
            ></Color>
          ))
        : "No Color... start by adding one!"}
    </>
  );
}

export default App;
