import React from "react";
import ReactDOM from "react-dom";
import LayoutDashboard from "./layouts/Dashboard";
import Home from "./components/Home";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <LayoutDashboard>
            <Home/>
        </LayoutDashboard>
    </React.StrictMode>,
    rootElement
);
