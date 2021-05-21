import React from 'react';
import { useState } from 'react';
//step 2
import ThemeContext from './themecontext';

//step3
const Provider = props => {
  const [object, setObject] = useState({ color: 'red', fontSize: '19px' });
  return (
    <ThemeContext.Provider
      value={{
        color: object.color,
        fontSize: object.fontSize,
        setNewvalues: setObject
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default Provider;
