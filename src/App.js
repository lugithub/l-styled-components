import React from "react";

// use the line below instead
// import styled from 'styled-components';

//this line enables babel-plugin-styled-components
import styled, { keyframes } from "styled-components/macro";

import logo from './logo.svg';
import './App.css';

const Applogospin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppWrapper = styled.div`
  text-align: center;

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-logo {
    animation: ${Applogospin} infinite 20s linear;
    height: 40vmin;

    &:hover {
      animation: ${Applogospin} infinite 1.5s linear;
    }
  }

  // global

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </AppWrapper>
  );
}

export default App;
