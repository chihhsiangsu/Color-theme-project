import { useState } from "react";

export function CopyButton({ copiedText }) {
  const [showCopyConfirm, setShowCopyConfirm] = useState(false);

  async function handleCopyConfirm() {
    await navigator.clipboard.writeText(copiedText);
    setShowCopyConfirm(true);
  }

  return (
    <>
      {!showCopyConfirm ? (
        <button onClick={handleCopyConfirm}>Copy</button>
      ) : (
        <button>SUCCESFULLY COPIED!</button>
      )}
    </>
  );
}
