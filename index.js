import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./src/Carousel";


const AppLayout = () => {
    return (
        <App/>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);