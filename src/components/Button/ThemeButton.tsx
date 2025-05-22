import { useTheme } from "../ContextApi/ContextApi";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        color: theme === "light" ? "#000" : "#FFF",
      }}
    >
      Cambiar Tema
    </button>
  );
};

export default ThemeButton;
