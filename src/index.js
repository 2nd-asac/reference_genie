import React from "react";
import ReactDOM from 'react-dom/client';
import styled from "styled-components"

import "./styles/_index.scss"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const App = () => {
    return (
        <>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
