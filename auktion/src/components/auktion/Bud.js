import React from 'react'

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
            <ul>{budArray}</ul>
        </div>
    )
}