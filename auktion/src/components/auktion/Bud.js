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
    })) : null

    return(
        <div>
            <h1>{props.auktion.Titel}</h1>
            <p>{props.auktion.Beskrivning}</p>
            <p>{props.auktion.SlutDatum}</p>
            <ul>{budArray}</ul>
        </div>
    )
}