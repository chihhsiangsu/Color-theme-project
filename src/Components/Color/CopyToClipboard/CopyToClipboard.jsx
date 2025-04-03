import { useEffect, useState } from "react";

export function CopyButton({ copiedText }) {
  const [showCopyConfirm, setShowCopyConfirm] = useState(false);

  async function handleCopyConfirm() {
    await navigator.clipboard.writeText(copiedText);
    setShowCopyConfirm(true);
  }

  useEffect(() => {
    const countTime = setTimeout(() => {
      setShowCopyConfirm(false);
    }, 3 * 1000);
    return () => clearTimeout(countTime);
  }, [showCopyConfirm]);

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
