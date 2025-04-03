import { useState, useEffect } from "react";
import "./Color.css";
import { DeleteComfirmPackage } from "./DeleteComfirmPackage/DeleteComfirmPackage";
import { ColorForm } from "./ColorForm/ColorForm";
import { CopyButton } from "./CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDelete, onUpdate }) {
  const [showDeleteComfirm, setShowDeleteComfirm] = useState(false);
  const [showColorForm, setShowColorForm] = useState(false);
  const [contrastResult, setContrastResult] = useState();

  function handleShowConfirm() {
    setShowDeleteComfirm(true);
  }

  function handleShowColorForm() {
    setShowColorForm(true);
  }

  useEffect(() => {
    async function postFetch() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            colors: [color.hex, color.contrastText],
          }),
        }
      );
      const data = await response.json();
      setContrastResult(data);
    }

    postFetch();
  }, [color.hex, color.contrastText]);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <CopyButton copiedText={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {contrastResult?.overall && (
        <p>
          {contrastResult.overall === "Yup" && (
            <span className="score-yup">Overall Contrast Score: Yup</span>
          )}
          {contrastResult.overall === "Kinda" && (
            <span className="score-kinda">Overall Contrast Score: Kinda</span>
          )}
          {contrastResult.overall === "Nope" && (
            <span className="score-nope">Overall Contrast Score: Nope</span>
          )}
        </p>
      )}
      {
        //condition of when to show the DeleteComfirmPackage : warning + 2 buttons,
        //1. showColorFrom is false 2. showDeleteComfirm is true

        !showColorForm &&
          (showDeleteComfirm ? (
            <DeleteComfirmPackage
              onCancel={() => setShowDeleteComfirm(false)}
              onDelete={() => onDelete(color.id)}
            />
          ) : (
            <button onClick={handleShowConfirm}>Delete</button>
          ))
      }
      {
        //condition when to show editButton and single ColorForm

        showColorForm ? (
          <>
            <ColorForm
              mode="edit"
              initialData={color}
              onSubmitColor={(updateColor) => onUpdate(color.id, updateColor)}
            />
            <button onClick={() => setShowColorForm(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={handleShowColorForm}>Edit</button>
        )
      }
    </div>
  );
}
