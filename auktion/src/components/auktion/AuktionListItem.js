import React from 'react';


export default class AuktionListItem extends React.Component{

    render()
    {
        return(<React.Fragment>
            <h3>{this.props.auktion.Titel}</h3>
            <p> {this.props.auktion.Beskrivning} </p>
        </React.Fragment>);
    }
}