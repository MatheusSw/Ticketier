import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <Dashboard />
    </React.StrictMode>,
    rootElement
);
