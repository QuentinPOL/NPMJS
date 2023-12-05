import React from 'react';

const componentLogin = (props) => {
    const { login, password } = props;
  
    return (
      <div>
        <p>Paramètre 1 : {login}</p>
        <p>Paramètre 2 : {password}</p>
      </div>
    );
};

export default componentLogin