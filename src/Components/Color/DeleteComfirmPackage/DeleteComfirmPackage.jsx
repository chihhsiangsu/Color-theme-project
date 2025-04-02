import "../DeleteComfirmPackage/DeleteComfirmPackage.css";

export function DeleteComfirmPackage({ onCancel }) {
  return (
    <>
      <sapn className="color-card-hightlight">Really Delete?</sapn>
      <button onClick={onCancel}>Cancel</button>
      <button>Delete</button>
    </>
  );
}
