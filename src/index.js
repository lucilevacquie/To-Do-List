import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.scss";
import {createGlobalStyle} from "styled-components";
import LoginProvider from "./loginProvider";

const GlobalStyle = createGlobalStyle `

  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <LoginProvider>
      <App/>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

