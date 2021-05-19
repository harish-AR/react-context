import React from 'react';
//step 6
import { useContext } from 'react';
import ThemeContext from '../themecontext';

function ChildTheme2() {
  const themeObject = useContext(ThemeContext);
  console.log('this is child2 ' + themeObject.setcolor);
  const sendTheme = color => {
    themeObject.setcolor(color);
  };
  return (
    <div>
      <button onClick={() => sendTheme('blue')}>Change theme</button>
    </div>
  );
}
export default ChildTheme2;
