import React from "react";
import ReactDOM from 'react-dom/client';
import styled from "styled-components"

import "./styles/_index.scss"
import PageA from "./redux/page";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: var(--text-active);
  @media (min-width: 500px) and (max-width:700px) {
    color : var(--text-color)
  }
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


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
