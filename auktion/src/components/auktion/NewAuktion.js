import React from 'react'

export default class NewAuktion extends React.Component {
    render(){
    return(
        <div className="container">
            <h4 className="center">New Auktion</h4>
            <div className="container">
                <div className="row create-auction">
                <form className="col s12">
                    <div className="input-field">
                        <i className="material-icons prefix">text_format</i>
                        <label htmlFor="Titel"></label>
                        <input placeholder="Title" id="Titel" name="Titel" type="text" required/>
                    </div>

                    <div className="input-field">
                        <i className="material-icons prefix">description</i>
                        <label htmlFor="Beskrivning"> </label>
                        <input placeholder="Description" id="Beskrivning" name="Beskrivning" ref="Beskrivning" type="text" required/>
                    </div>

                    {/* todays date */}
                    <div className="input-field">
                        <i className="material-icons prefix">date_range</i>
                        <label htmlFor="StartDatum"></label>
                        <input placeholder="Start Date" className="black-border" type="text" id="StartDatum" name="StartDatum" /* value={moment().format('MMM DD, YYYY')} */ readOnly />
                    </div>
                    
                    {/* date picker */}
                    <div className="input-field">
                        <i className="material-icons prefix">date_range</i>
                        <label htmlFor="SlutDatum"></label>
                        <input placeholder="End Date" type="text" className="datepicker" id="SlutDatum" name="SlutDatum" /* ref={this.datepicker} */ required />
                    </div>

                    <div className="input-field">
                        <i className="material-icons prefix">attach_money</i>
                        <label htmlFor="Utropspris"></label>
                        <input placeholder="Starting Price" id="Utropspris" name="Utropspris" type="text" /* onChange={this.handleChange} */ required />
                    </div>

                    <div className="input-field">
                        <i className="material-icons prefix">image</i>
                        <label htmlFor="img"></label>
                        <input placeholder="Add Picture" type="text" ref="img" id="img" name="img" /* onChange={this.handleChange} */ required />
                    </div>

                    <div className="input-field">
                        <i className="material-icons prefix">border_color</i>
                        <label htmlFor="SkapadAv"></label>
                        <input placeholder="Created by" id="SkapadAv" name="SkapadAv" type="text" /* onChange={this.handleChange} */ required />
                    </div>
                    <div className="input-field center">
                        <button className="btn btn:hover center">Save Auction</button>
                    </div>
                    
                </form>
                
                </div>
                
            </div>
            <hr/>
        </div>
    )
}
}
