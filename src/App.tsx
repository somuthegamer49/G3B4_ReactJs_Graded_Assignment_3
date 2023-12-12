import React from 'react';
import './App.css';
import { Fragment } from 'react';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
        <Home handleClick={function (name: string): void {
        throw new Error('Function not implemented.');
      } }/>
    </Fragment>
  );
}

export default App;
