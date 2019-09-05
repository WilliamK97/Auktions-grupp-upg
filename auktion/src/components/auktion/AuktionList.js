import React from 'react';
import { NavLink } from 'react-router-dom';

export default class AuktionList extends React.Component{
    render ()
    {
        let auktion = this.props.auktion.map( a => {

            return (<div>
                
                <div  key={a.AuktionID} className="row">
                    <div className="col s4">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <div className="card-title orange-text">{a.Titel}</div>
                                <div class="card-content">
                                    <p>{a.Beskrivning}</p>
                                    <hr/>
                                    <p>{a.Utropspris} kr</p>
                                    <hr/>
                                    <p>Slutdatum: {a.SlutDatum.slice(5, -9)}</p>
                                    
                                </div>
                                {/* fixa route här till annonsen på en ny sida */}
                                <div class="card-action padding">
                                    <button onClick={this.props.handleBudId}><NavLink to='/bud'>{a.AuktionID}</NavLink></button>
                                </div>
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