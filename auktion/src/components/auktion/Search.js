import React from 'react'
  
export default class Search extends React.Component{
    render(){
        
        return(
            <form onSubmit={this.props.handelsearch}>
                <div className="input-field center">
                    <input className="black-text" type="search" name="auktion" placeholder="Sök titlar"/>
                    <label className="label-icon"></label>
                </div>
            </form>
        )
    }
}