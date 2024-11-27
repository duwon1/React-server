import React from "react";
import ReactDOM from "react-dom/client"; // 변경된 import 경로
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot 사용
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
