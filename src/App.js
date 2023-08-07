import { useState } from "react";

import "./styles/main.scss";
import Login from "./pages/Login";
import Signup from "./Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  window.document.title = "M1 Tracker v2";
  // const [counter, setCounter] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <h1>Error: 404. Page Not Found!.</h1>,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <h1>Error: 404. Page Not Found!.</h1>,
    },
  ]);

  return (
    <div className="App">
      {/* <Logo /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
