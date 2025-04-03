import { useState } from "react";
import "./Color.css";
import { DeleteComfirmPackage } from "./DeleteComfirmPackage/DeleteComfirmPackage";
import { ColorForm } from "./ColorForm/ColorForm";

export default function Color({ color, onDelete, onUpdate }) {
  const [showDeleteComfirm, setShowDeleteComfirm] = useState(false);
  const [showColorForm, setShowColorForm] = useState(false);

  function handleShowConfirm() {
    setShowDeleteComfirm(true);
  }

  function handleShowColorForm() {
    setShowColorForm(true);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {!showColorForm &&
        (showDeleteComfirm ? (
          <DeleteComfirmPackage
            onCancel={() => setShowDeleteComfirm(false)}
            onDelete={() => onDelete(color.id)}
          />
        ) : (
          <button onClick={handleShowConfirm}>Delete</button>
        ))}
      {showColorForm ? (
        <>
          <ColorForm
            mode="edit"
            onSubmitColor={(updateColor) => onUpdate(color.id, updateColor)}
          />
          <button onClick={() => setShowColorForm(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={handleShowColorForm}>Edit</button>
      )}
    </div>
  );
}
