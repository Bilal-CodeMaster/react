import { useContext,createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {}
});

export const 