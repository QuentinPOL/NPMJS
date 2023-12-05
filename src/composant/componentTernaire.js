import React from 'react';

function composant () {
  const isConnected =  true;

    return (
      <div>
        {
            isConnected ? (<div>Connecter</div>) : (<div>Pas connecter</div>)
        }
      </div>
    );
}

export default composant