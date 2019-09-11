import React from 'react';
import './App.css';
import AuktionContainer from './components/auktion/AuktionContainer'
import Nav from "./components/Nav"
import { BrowserRouter, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
     <Nav/>
      <Switch>
          
           
            <div className="center container">
              <AuktionContainer/>
            </div> 
            
       </Switch>
      </BrowserRouter>
        
    
  );
}

export default App;
