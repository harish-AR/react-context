import React from 'react';

//step5
import { useContext } from 'react';
import ThemeContext from '../themecontext';

function ChildTheme1() {
  const themeText = useContext(ThemeContext);
  console.log(themeText);
  return (
    <div>
      <h1 style={{ color: themeText.color, fontSize: themeText.fontSize }}>
        Hello text
      </h1>
    </div>
  );
}
export default ChildTheme1;
