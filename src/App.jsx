import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
function App() {
  const Router = useRoutes(routes);
  return (
    <>
      <Header />
      {Router}
    </>
  );
}

export default App;
