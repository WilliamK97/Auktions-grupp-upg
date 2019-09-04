import React from 'react';
import './App.css';
import AuktionContainer from './components/auktion/AuktionContainer'
import Nav from "./components/Nav"
import {BrowserRouter, Route} from "react-router-dom"
import NewAuktion from "./components/auktion/NewAuktion"


function App() {
  return (
  <BrowserRouter>
      <div>
    
        <Nav/>
        <Route path="/new" component={NewAuktion}/>
          <div className="center container">
            <AuktionContainer/>
          </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
