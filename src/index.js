import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import FunctionnnalComponent from './composant/salutMecComposant'
import MonComposant from './composant/componentLogin';
import Xcomposant from './composant/componentTernaire'
import XcomposantBoucle from './composant/componentBoucle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <FunctionnnalComponent couleur/>
    <MonComposant login="username" password="mdp"/>
    <Xcomposant isConnected="false"/>
    <XcomposantBoucle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
