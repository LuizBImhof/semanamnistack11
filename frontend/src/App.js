import React from 'react';

import './global.css'

import Routes from './routes';

function App() {
  return (
    //<Header title = "Semana omnistack"/> -- acessado por props.title
    //<Header>
    //  Semana omnistack 
    //</Header> // acessado por props.children

    <Routes />
  );
}

export default App;
