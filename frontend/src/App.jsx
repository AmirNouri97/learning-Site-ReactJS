import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/authContext";
// import Header from "./components/Header/Header";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "./baseURL";
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
  const login = useCallback((userInfos, token) => {
    setToken(token);
    setUserInfos(userInfos);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  }, []);
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`${BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoggedIn(true);
          setUserInfos(data);
        });
    }
  }, [login]);
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
