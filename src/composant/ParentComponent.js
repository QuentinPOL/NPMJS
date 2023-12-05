import React, { useState } from 'react';
import ChildComponent from './childComponent';

const ParentComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isValid] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <form>
        <label>
          Login:
          <input type="text" value={login} onChange={handleLoginChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Intégration du composant enfant */}
      <ChildComponent login={login} password={password} isValid={isValid} />
    </div>
  );
};

export default ParentComponent;