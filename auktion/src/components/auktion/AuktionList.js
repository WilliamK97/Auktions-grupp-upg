import React from 'react';


export default class AuktionList extends React.Component{
    render ()
    {
        let auktion = this.props.auktion.map( a => {

            return (
                
                <div className="row">
                    <div className="col s4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <div className="card-title orange-text">{a.Titel}</div>
                                <div class="card-content">
                                    <p>{a.Beskrivning}</p>
                                </div>
                                <div class="card-action padding">
                                    <a href="#">Till annons</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        });

        return(<div>
            
                <h1> Alla auktioner </h1>
                <div> {auktion} </div>
            
            </div>)

    }

}