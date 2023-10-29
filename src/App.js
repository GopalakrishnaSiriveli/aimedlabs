// App.js
import React from "react";
import Login from "./Login";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppContainer>
        <Login />
      </AppContainer>
    </div>
  );
}

export default App;
