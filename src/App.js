import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const verifyPassword = (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Vérifiez le mot de passe
    if (password === '1234') {
      setMessage('Mot de passe correct');
      setMessageColor('green');
    } else {
      setMessage('Mot de passe incorrect');
      setMessageColor('red');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={verifyPassword}>
          <p>
            <label>Username :</label>
            <input type="text" name="usename" placeholder="nom d'utilisateur"/>
          </p>

          <p>
            <label>Password: </label>
            <input type="password" name="password" placeholder="mot de passe" value={password} onChange={handlePasswordChange}/>
          </p>
        <input type="submit" value="Envoyer" />
      </form>

      {/* Afficher le message dans la div */}
      <div style={{ color: messageColor }}>{message}</div>
    </div>
  );
}

export default App