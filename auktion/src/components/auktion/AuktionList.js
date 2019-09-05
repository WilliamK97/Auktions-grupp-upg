import React from 'react';
import { NavLink } from 'react-router-dom';

export default class AuktionList extends React.Component{
    render ()
    {

        const aktuellaAuktioner = this.props.auktion.filter(a => {
            return Date.parse(a.SlutDatum) >= Date.now();
        });

        let auktion = aktuellaAuktioner!== undefined ?  (aktuellaAuktioner.map( a => {
            return (
            <div>
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
                                    <p>Visa mer:</p>
                                    
                                </div>
                                {/* fixa route här till annonsen på en ny sida */}
                                <div className="card-action padding">
                                    <button className="orange btn btn:hover center" onClick={this.props.handleBudId}>
                                        <NavLink className="orange-text" to='/auktion'>{a.AuktionID}</NavLink>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div> 
            )
        })) : null

        return(<div>

                <h1> Alla aktuell auktioner </h1>
                <div> {auktion} </div>
            
            </div>)

    }

}