import React from 'react';

const InputText = ({ onChange, value }) => (
  <input type="text" placeholder="Username" onChange={onChange} value={value} />
);

export default InputText;