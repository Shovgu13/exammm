import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from "./routers/router";

function App() {
  const routerD = createBrowserRouter(router);
  return (
    <>
      <RouterProvider router={routerD} />
    </>
  );
}

export default App;
