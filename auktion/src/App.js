import React from 'react';
import './App.css';
import AuktionContainer from './components/auktion/AuktionContainer'
import Nav from "./components/Nav"


function App() {
  return (
   <div>
    <Nav/>
      <div className="center container">
        <AuktionContainer/>
      </div>
    </div>
  );
}

export default App;
