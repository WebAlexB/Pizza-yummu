import React from "react";
import ReactDOM from 'react-dom/client';
import App from "../src/components/app/app";
import { HashRouter } from "react-router-dom";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);