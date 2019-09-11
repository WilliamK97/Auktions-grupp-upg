import React from 'react';
import { NavLink } from 'react-router-dom';

export default class AuktionList extends React.Component{
    state = { 
        bud: this.props.bud
    }
    render ()
    {
        let auktion = this.props.auktion !== undefined ?  (this.props.auktion.map(a => {
            return (
            <div>
                <div  key={a.AuktionID} className="row">
                    <div className="col s12 m4">
                        <div className="card blue-grey darken-1 card small">
                            <div className="card-content white-text">
                                <div className="card-title orange-text">{a.Titel}</div>
                                <div class="card-content">
                                    <p className="orange-text">Beskrivning</p>
                                    <p>{a.Beskrivning}</p>
                                    <hr/>
                                    <p>Utropspris:  {a.Utropspris} kr</p>
                                    <hr/>
                                    <p>Slutdatum: {a.SlutDatum.slice(5, -9)}</p>
                                    
                                    
                                </div>
                                {/* fixa route här till annonsen på en ny sida */}
                                <div className="card-action padding">
                                <p>Visa mer:</p>
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
        })) : (
            <div className="center">
                <h4>Inga auktioner hittades</h4>
            </div>
        )

        return(<div>

                <h1> Alla aktuell auktioner </h1>
                <div> {auktion} </div>
            
            </div>)

    }

}