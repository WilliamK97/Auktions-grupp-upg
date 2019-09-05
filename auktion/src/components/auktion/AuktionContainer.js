import React, { Component } from 'react'
import AuktionList from "./AuktionList"
import Search from "./Search"
import Bud from "./Bud"
import {  BrowserRouter, Route } from 'react-router-dom';



const url = "http://nackowskis.azurewebsites.net/api/Auktion/2130/";

export class AuktionContainer extends Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            auktions: [],
            bud:[],
            auktion1:[]
        }
    }

    componentDidMount()
    {
        fetch(url)
        .then(response => response.json())
        .then( json => console.log(json) + this.setState({
            auktions: json
         }));

    }

    handleBudId = (e) => {
        const budID = e.target.innerHTML;
        const auktionID = e.target.innerHTML;
        const url = `http://nackowskis.azurewebsites.net/api/Bud/2130/${budID}`;
        const url2 = `http://nackowskis.azurewebsites.net/api/auktion/2130/${auktionID}`;

        fetch(url)
        .then(response => response.json())
        .then(json => console.log(json) + 
            this.setState({
                bud: json
        }));

        fetch(url2)
        .then(response => response.json())
        .then(json => console.log(json) + 
            this.setState({
                auktion1: json
        }));        
    }

    render() {
        return (
            <div>
                <span className="center">
                <Search/>
                </span>
              <BrowserRouter>
                <Route exact path='/' component={() => <AuktionList auktion={this.state.auktions} handleBudId={this.handleBudId} />}></Route>
                <Route path='/auktion' component={() => <Bud auktion={this.state.auktion1} bud={this.state.bud} />}></Route>
                </BrowserRouter>  

                </div>
            
        )
    }
}

export default AuktionContainer

