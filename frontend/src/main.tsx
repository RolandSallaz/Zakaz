import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.scss";
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HashRouter>
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>
            <App/>
        </HashRouter>
    </React.StrictMode>
);
