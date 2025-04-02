import { useState } from "react";
import "./Color.css";
import { DeleteButton } from "./DeleteButton/DeteleButton";
import { DeleteComfirmPackage } from "./DeleteComfirmPackage/DeleteComfirmPackage";

export default function Color({ color, onDelete }) {
  const [showDeleteComfirm, setShowDeleteComfirm] = useState(false);

  function handleShowConfirm() {
    setShowDeleteComfirm(true);
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
      <p>
        {showDeleteComfirm ? (
          <DeleteComfirmPackage
            onCancel={() => setShowDeleteComfirm(false)}
            onDelete={() => onDelete(color.id)}
          />
        ) : (
          <DeleteButton onConfirm={handleShowConfirm} />
        )}
      </p>
    </div>
  );
}
