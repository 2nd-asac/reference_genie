import React from "react";
import ReactDOM from 'react-dom/client';
import PageA from "./redux/page";

const App = () => {
    return (
        <>
            <PageA/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
