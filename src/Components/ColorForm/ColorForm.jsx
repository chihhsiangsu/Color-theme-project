import { ColorInput } from "../ColorInput/ColorInput";
import "./ColorForm.css";

export function ColorForm({
  handleAddColor,
  initialData = {
    role: "some color",
    hex: "#123456",
    contrastText: "#ffffff",
  },
  mode = "add",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleAddColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>{mode === "edit" ? "Update Color" : "Add Color"}</button>
    </form>
  );
}
