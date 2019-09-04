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
            <div className="center container">
              <Route exact path="/" component={AuktionContainer}/>
              <Route path="/new" component={NewAuktion}/>
            </div> 
          </div>
        </BrowserRouter>
    
  );
}

export default App;
