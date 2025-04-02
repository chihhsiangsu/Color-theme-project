import "../DeleteComfirmPackage/DeleteComfirmPackage.css";

export function DeleteComfirmPackage({ onCancel, onDelete }) {
  return (
    <>
      <sapn className="color-card-hightlight">Really Delete?</sapn>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
}
