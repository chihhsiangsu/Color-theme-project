export function Theme({
  themes,
  selectedThemeId,
  onSelectTheme,
  onAddTheme,
  onEditTheme,
  onDeleteTheme,
}) {
  return (
    <>
      <select
        value={selectedThemeId}
        onChange={(event) => onSelectTheme(event.target.value)}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <button onClick={onAddTheme}>Add</button>
      <button onClick={onEditTheme}>Edit</button>
      <button onClick={onDeleteTheme}>Delete</button>
    </>
  );
}
