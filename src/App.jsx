import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { ColorForm } from "./Components/ColorForm/ColorForm.jsx";
import { uid } from "uid";
import "../src/App.css";
import useLocalStorageState from "use-local-storage-state";
import { Theme } from "./Components/Theme/Theme.jsx";
import { initialThemes } from "./lib/themes";
import { useState } from "react";

//Colors

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

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

  //Themes

  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const defaultTheme = initialThemes.find(
    (theme) => theme.name === "Default Theme"
  );
  const [selectedThemeId, setSelectedThemeId] = useState(
    defaultTheme?.id || ""
  );

  const selectedTheme = themes.find((theme) => theme.id === selectedThemeId);
  const themeColors = colors.filter((color) =>
    selectedTheme?.colors.includes(color.id)
  );

  function handleAddTheme() {}

  function handleEditTheme() {}

  function handleDeleteTheme() {}

  return (
    <>
      <h1 className="app-title">Theme Creator</h1>
      <Theme
        themes={themes}
        selectedThemeId={selectedThemeId}
        onAddTheme={handleAddTheme}
        onEditTheme={handleEditTheme}
        onDeleteTheme={handleDeleteTheme}
        onSelectTheme={setSelectedThemeId}
      />
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length > 0
        ? colors.map((color) => (
            <Color
              key={color.id}
              color={color}
              onDelete={handleDeleteColor}
              onUpdate={handleUpdateColor}
            />
          ))
        : "No Color... start by adding one!"}
    </>
  );
}

export default App;
