import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";
import "./style.scss";
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

