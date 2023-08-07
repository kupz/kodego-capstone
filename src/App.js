import { useState } from "react";
import Logo from "./pages/global/Logo";
import "./styles/main.scss";
import Login from "./pages/Login";

function App() {
  window.document.title = "M1 Tracker v2";
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Logo />
      <Login />
    </div>
  );
}

export default App;
