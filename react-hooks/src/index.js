import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ThemeContext from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="red">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
