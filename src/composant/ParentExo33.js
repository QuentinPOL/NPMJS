import React, { useState } from 'react';
import InputText from './childExoInputName33';
import InputPassword from './childExoInputPass33';

const ParentComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [divColor, setDivColor] = useState('red');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    updateDivColor(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    updateDivColor(username, event.target.value);
  };

  const updateDivColor = (username, password) => {
    if (username !== '' && password !== '') {
      setDivColor('green');
    } else {
      setDivColor('red');
    }
  };

  return (
    <div>
        <label> Login :
            <InputText onChange={handleUsernameChange} value={username} />
        </label>
        <br/>
        <label> Password :
            <InputPassword onChange={handlePasswordChange} value={password} />
            </label>
        <br/>
      <div style={{ backgroundColor: divColor, width: '100%', height: '50px' }}></div>
    </div>
  );
};

export default ParentComponent;