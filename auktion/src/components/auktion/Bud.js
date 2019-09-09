import React from 'react'

export default class Bud extends React.Component{
    state = {
        bud: [],
        summa: null,
        auktionID: null,
        budgivare: null
    }
    
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const aktionsid = this.props.auktion.AuktionID;

        const url = 'http://nackowskis.azurewebsites.net/api/Bud/2130/'
        const auktionUrl = `http://nackowskis.azurewebsites.net/api/Bud/2130/${aktionsid}`

        fetch(auktionUrl)
        .then(response => response.json())
        .then(json => 
            this.setState({
                bud: json
        }));

        const hogstaBud = this.props.bud.filter(bud => {
            return e.target.summa.value < bud.Summa+1
        })

        if (hogstaBud.length !== 0) {
            return alert ('Ange ett bud som är högre än högsta befintligt bud!');
        }
        else {
            const nyttBud = {"Summa": e.target.summa.value,
                             "Budgivare": e.target.budgivare.value,
                             "AuktionID": aktionsid}

            fetch(url,{
                method: 'POST',
                body: JSON.stringify(nyttBud),
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                }
                }).then(function (data) {
                console.log('Request success: ', 'posten skapad');
               })       
        }
    }
    render(){
    const budArray = this.props.bud !== undefined ? (this.props.bud.map(bud => {
        return(
            <span key={bud.BudID}>
                <li>{bud.Budgivare}</li>
                <li>{bud.Summa}</li>
                <li>{bud.AuktionID}</li>
            </span>
        )
    })) : (
        <div className="center">
            <h4>Inga bud, bli den första som budar</h4>
        </div>
    )

    return(
        <div>
            <h1>{this.props.auktion.Titel}</h1>
            <p>{this.props.auktion.Beskrivning}</p>
            <p>{this.props.auktion.SlutDatum}</p>
            <p>{this.props.auktion.AuktionID}</p>
            <ul>{budArray}</ul>
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="summa">Summa: </label>
                <input type="text" id="summa" name="summa" onChange={this.handleChange}/>
                <label htmlFor="budgivare">Budgivare: </label>
                <input type="text" id="budgivare" onChange={this.handleChange}/>
                <button>Lägg bud</button>
                </form>
            </div>
        </div>
    )
}
}

