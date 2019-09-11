import React, { Component } from 'react'
import AuktionList from "./AuktionList"
import Search from "./Search"
import Bud from "./Bud"
import {  BrowserRouter, Route } from 'react-router-dom';
import NewAuction from './NewAuktion';



const url = "http://nackowskis.azurewebsites.net/api/Auktion/2130/";

export class AuktionContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            auktions: [],
            bud:[],
            auktion1:[],
            searchFilter: (list) => list.filter(a => Date.parse(a.SlutDatum) >= Date.now()),
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

    handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        if(search !== "") {
            this.setState({
                searchFilter: (list) => list.filter(a => a.Titel.toLowerCase().includes(search.toLowerCase())),
            });
        } else {
            this.setState({
                searchFilter: list => list.filter(a => Date.parse(a.SlutDatum) >= Date.now()),
            })
        }
    }

    render() {

        return (
            <div>
                <span className="center">
                <Search handleSearch={this.handleSearch}/>
                </span>
              <BrowserRouter>
                <Route exact path='/' component={() => <AuktionList auktion={this.state.searchFilter(this.state.auktions)} bud={this.state.bud} handleBudId={this.handleBudId} />}></Route>
                <Route path='/auktion/' component={() => <Bud auktion={this.state.auktion1} bud={this.state.bud} />}></Route>
                <Route path='/NewAuction' component = {NewAuction} />
                </BrowserRouter>  
                </div>
        )
    }
}

export default AuktionContainer

