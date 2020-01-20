import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import PageIndex from './page/index';
function App() {
  return (
    <div> 
      <HashRouter>
        <PageIndex/>
      </HashRouter>
    </div>
  );
}

export default App;
