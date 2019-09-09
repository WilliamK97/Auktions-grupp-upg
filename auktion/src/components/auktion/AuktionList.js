import React from 'react';
import { NavLink } from 'react-router-dom';
import AuktionsContainer from './AuktionContainer'

export default class AuktionList extends React.Component{
    render ()
    {
        console.log(this.props.auktion);
        let auktion = this.props.auktion !== undefined ?  (this.props.auktion.map(a => {
            return (
            <div>
                <div  key={a.AuktionID} className="row">
                    <div className="col s12 m4">
                        <div className="card blue-grey darken-1 card small">
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