import './App.css';
import React from 'react';
import data from './data'
import EightBall from './EightBall';

function App() {
  return (
    <div className='App'>
      <EightBall answers={data}/>
    </div>
  );
}

export default App;
