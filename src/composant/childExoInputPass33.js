import React from 'react';

const InputPassword = ({ onChange, value }) => (
  <input type="password" placeholder="Password" onChange={onChange} value={value} />
);

export default InputPassword;