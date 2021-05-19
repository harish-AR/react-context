import React from 'react';
import ChildTheme1 from './child1';
import ChildTheme2 from './child2';
//step4
import Provider from '../provider';
import './style.css';

export default function App() {
  return (
    <div>
      <Provider>
        <ChildTheme1 />
        <ChildTheme2 />
      </Provider>
    </div>
  );
}
