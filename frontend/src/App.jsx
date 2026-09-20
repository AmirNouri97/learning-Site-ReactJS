import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/authContext";
// import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
// import TestUseReducer from "./components/TestUseReducer/TestUseReducer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) return;
    const color = JSON.parse(savedTheme);
    if (color) {
      document.documentElement.style.setProperty(
        "--primary-color",
        color.primary,
      );
      document.documentElement.style.setProperty(
        "--primary-color-bg",
        color.bg,
      );
    }
  }, []);
  const login = (token) => {
    setToken(token);
    localStorage.setItem("user", JSON.stringify({ token }));
  };
  const logout = () => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  };
  const Router = useRoutes(routes);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {Router}
    </AuthContext.Provider>
  );
  // return <TestUseReducer />;
}

export default App;
