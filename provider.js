import React from 'react';
import { useState } from 'react';
//step 2
import ThemeContext from './themecontext';

//step3
const Provider = props => {
  const [color, setcolor] = useState('red');
  return (
    <ThemeContext.Provider value={{ color: color, setcolor: setcolor }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default Provider;
