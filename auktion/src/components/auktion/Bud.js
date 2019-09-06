import React from 'react'
import AuktionContainer from './AuktionContainer'

export default function Tables(props){
    const budArray = props.bud !== undefined ? (props.bud.map(bud => {
        return(
            <span key={bud.BudID}>
                <li>{bud.Budgivare}</li>
                <li>{bud.Summa}</li>
            </span>
        )
    })) : (
        <div className="center">
            <h4>Inga bud, bli den första som budar</h4>
        </div>
    )

    return(
        <div>
            <h1>{props.auktion.Titel}</h1>
            <p>{props.auktion.Beskrivning}</p>
            <p>{props.auktion.SlutDatum}</p>
            <ul>{budArray}</ul>
        </div>
    )
}