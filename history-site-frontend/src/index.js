import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Inject global styles directly
const globalStyles = `
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    /* Add other global styles as needed */
  }
`;

// Create a <style> element and append it to the document head
const styleSheet = document.createElement("style");
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
