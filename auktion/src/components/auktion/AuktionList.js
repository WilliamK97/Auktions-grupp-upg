import React from 'react';
import AuktionListItem from './AuktionListItem';

export default class AuktionList extends React.Component{
    render ()
    {
        let auktion = this.props.auktion.map( a => {

            return (<AuktionListItem auktion = {a} />)
        });

        return(<React.Fragment>
                <h1> Alla auktioner </h1>
                <div> {auktion} </div>
            
            </React.Fragment>)

    }

}
