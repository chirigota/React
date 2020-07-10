import React, { Component } from 'react'
import Select from "../select/select.js"

export class PickLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "selected": ""
        }
    }

    getLocation() {
        this.setState({ ...this.state, "selected": "Mi ubicación" })
        navigator.geolocation.getCurrentPosition((pos) => {console.log(pos)}, (e) => {console.log(e)}, {enableHighAccuracy: true});
    }

    render() {
        return (
            <div>
                <button onClick={this.getLocation.bind(this)}>Mi ubicación</button>
                <Select required={true} selectOption={(value) => console.log(value)} defaultValue={this.state.selected} type="text" placeholder="Introduzca una dirección/tienda" label="Origen" data={["Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23"]} />
                <Select required={true} selectOption={(value) => console.log(value)} type="text" placeholder="Introduzca una dirección/tienda" label="Destino" data={["Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23", "Calle del codo", "Calle del Carmen", "Calle de la Pepa", "Calle 23"]} />
            </div>
        )
    }
}

export default PickLocation
