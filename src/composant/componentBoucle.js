import React from 'react';

function composant () {
  const nombres = [1, 2, 3, 4];

    return (
      <div>
        <ul>
            {nombres.map(nombre => (
                <li key={nombre}>{nombre}</li>
            ))}
        </ul>
      </div>
    );
}

export default composant