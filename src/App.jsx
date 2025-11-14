import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) return;
    const color = JSON.parse(savedTheme);
    if (color) {
      document.documentElement.style.setProperty(
        "--primary-color",
        color.primary
      );
      document.documentElement.style.setProperty(
        "--primary-color-bg",
        color.bg
      );
    }
  }, []);
  const Router = useRoutes(routes);
  return <>{Router}</>;
}

export default App;
