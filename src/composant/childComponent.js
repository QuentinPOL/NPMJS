import React, { useEffect, useState } from 'react';

const ChildComponent = ({ login, password }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Vérifiez si les deux champs sont renseignés
    setIsValid(login !== '' && password !== '');
  }, [login, password]);

  return (
    <div style={{ backgroundColor: isValid ? 'green' : 'red', padding: '10px', marginTop: '20px' }}>
      <h2>Child Component</h2>
      <p>Login: {login}</p>
      <p>Password: {password}</p>
      <p style={{ color: 'white' }}>{isValid ? 'Champs renseignés' : 'Champs non renseignés'}</p>
    </div>
  );
};

export default ChildComponent;