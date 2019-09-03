import React, { Component } from 'react'
import AuktionList from "./AuktionList"

export class AuktionContainer extends Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            auktions: []
        }
    }

    componentDidMount()
    {
        const url = "http://nackowskis.azurewebsites.net/api/Auktion/2150/";

        fetch(url)
        .then(response => response.json())
        .then( json => console.log(json) + this.setState({
            auktions: json
         }));

    }

    render() {
        return (
            <div>
                <AuktionList auktion={this.state.auktions}/>
            </div>
        )
    }
}

export default AuktionContainer

