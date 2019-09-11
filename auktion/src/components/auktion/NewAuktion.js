import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Redirect} from 'react-router-dom';

export default class NewAuktion extends React.Component {
    state = {
        Titel: null,
        SlutDatum: null,
        Utropspris: null,
        Beskrivning: null,
        SkapadAv: null,
        auctionSubmitted: false
      };
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2130/';
        const input = {
            Titel: this.state.Titel,
            Beskrivning: this.state.Beskrivning,
            StartDatum: new Date().toJSON(),
            SlutDatum: new Date(this.state.SlutDatum).toJSON(),
            Gruppkod: 2130,
            Utropspris: this.state.Utropspris,
            SkapadAv: this.state.SkapadAv
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(response => this.setState({auctionSubmitted: response.ok}))
        .catch(error => console.error('Error:', error));
        
    }
    
    handleSelect = date => {
        this.setState({
            SlutDatum: date.setHours(date.getHours() + 2)
        });  
    };

    render() {
        let endDate = new Date();
        if(this.state.auctionSubmitted)
        {
            return <Redirect to="/" />
        }
        return (
            
                <div className="row container">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title orange-text">Create new auction</span>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <input type="text" id="Titel" onChange={this.handleChange} />
                                        <label htmlFor="Titel">Title</label>
                                    </div>
                                    <label htmlFor="SlutDatum">End date</label>
                                    <br />
                                    <DatePicker
                                        selected={this.state.SlutDatum}
                                        onSelect={this.handleSelect}
                                        minDate={endDate}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                    />
                                    <div>
                                        <div className="input-field inline">
                                            <input
                                                type="number"
                                                id="Utropspris"
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="Utropspris">Starting price</label>
                                        </div>
                                         SEK
                                    </div>
                                    <div className="input-field">
                                        <textarea
                                            id="Beskrivning"
                                            className="materialize-textarea"
                                            onChange={this.handleChange}
                                        />
                                        <label htmlFor="Beskrivning">Information about the product</label>
                                    </div>
                                    <div className="input-field">
                                        <textarea
                                            id="SkapadAv"
                                            className="materialize-textarea"
                                            onChange={this.handleChange}
                                        />
                                        <label htmlFor="SkapatAv">Seller </label>
                                    </div>
                                    <button id="createNewCMD" className="orange btn btn:hover center">Create new auktion</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}