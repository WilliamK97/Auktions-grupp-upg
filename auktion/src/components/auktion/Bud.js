import React from 'react'

export default class Bud extends React.Component {
    state = {
        auktion: this.props.auktion,
        bud: this.props.bud,
        summa: this.props.summa,
        auktionID: null,
        budgivare: null
    }


    // componentDidMount() {
    //     console.log("State", this.props);
    //     const auktionsid = this.state.bud.AuktionID;
    //     console.log(this.state.bud);
    //     const url = `http://nackowskis.azurewebsites.net/api/bud/2130/${auktionsid}`
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             this.setState({
    //                 auktion: json
    //             })
    //         });
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.bud);

        const auktionsid = this.state.auktion.AuktionID;
        const url = 'http://nackowskis.azurewebsites.net/api/Bud/2130/'
        //const budUrl = `http://nackowskis.azurewebsites.net/api/Bud/2130/${auktionsid}`
        //const hogstaBud = this.props.bud.map(bud => bud.Summa).reduce((a, b) => a > b ? a : b);
        var hogstaBud;
        console.log(Date.parse(this.state.auktion.SlutDatum));
        const bud = e.target.summa.value;
        const utropspris = this.state.auktion.Utropspris;   

        if (this.state.bud.length < 1) {
             hogstaBud = this.state.auktion.Utropspris
        }
        else {
             hogstaBud = this.props.bud.map(bud => bud.Summa).reduce((a, b) => a > b ? a : b)
        }
        
        if (bud <= hogstaBud) {
            return alert('Ange ett bud som är högre än högsta befintligt bud!');
        }
        else if (bud <= utropspris) {
            return alert('Ange ett bud som är högre än utropspriset!');
        }
        else if (bud > hogstaBud) {
            const nyttBud = {
                "Summa": e.target.summa.value,
                "Budgivare": e.target.budgivare.value,
                "AuktionID": auktionsid
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(nyttBud),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(function (data) {
                console.log('Request success: ', 'posten skapad');
            }) 
            return alert('Budet lagt!', window.location.href = "http://localhost:3000/")
        }
        else {
            return alert('Ange ett giltigt bud!');
        }

    }
    render() {
        const budArray = this.state.bud !== undefined ? (this.state.bud.map(bud => {
            return (
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

        var hogstaBud;
        if (this.state.bud.length < 1) {
            hogstaBud = this.state.auktion.Utropspris
       }
       else {
            hogstaBud = this.props.bud.map(bud => bud.Summa).reduce((a, b) => a > b ? a : b)
       }
        if (Date.parse(this.state.auktion.SlutDatum) > Date.now()){
        return (
            <div>
                <h1>{this.state.auktion.Titel}</h1>
                <p>{this.state.auktion.Beskrivning}</p>
                <p>{this.state.auktion.SlutDatum}</p>
                <ul>{budArray}</ul>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="summa">Summa: </label>
                        <input type="text" id="summa" name="summa" onChange={this.handleChange} />
                        <label htmlFor="budgivare">Budgivare: </label>
                        <input type="text" id="budgivare" onChange={this.handleChange} />
                        <button>Lägg bud</button>
                    </form>
                </div>
            </div>
        )
        }
        else{
            return (
                <div>
                    <h1>{this.state.auktion.Titel}</h1>
                    <p>{this.state.auktion.Beskrivning}</p>
                    <p>{this.state.auktion.SlutDatum}</p>
                    <ul>{hogstaBud}</ul>
                </div>
            )
        }
    }
}