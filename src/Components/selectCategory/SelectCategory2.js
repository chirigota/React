import React, { Component } from 'react';
import CategoryList from "../categoryList/CategoryList.js";
import "./SelectCategory.css";
import Select from "../select/select.js";
import { CategoryConsumer } from "../../Contexts/categoryContext.js";
import Rectangle from "../login/views/Rectangle2";
import { Auth as AuthContext } from "../login/context/AuthContext";

class SelectCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleStreet(value) {
        console.log("La nueva calle es:", value);
        if (value === "Ubicación actual")

            navigator.geolocation.getCurrentPosition((pos) => {
                console.log('soy: ', pos.coords.latitude)
                this.setState({ ...this.state, "coords": { "latitude": pos.coords.latitude, "longitude": pos.coords.longitude } });
            });
        else {
            fetch(`https://nominatim.openstreetmap.org/search?q=${value} Madrid, España&format=json`).then(d => d.json()).then(d => {
                if (d[0])
                    this.setState({ ...this.state, "coords": { "latitude": d[0].lat, "longitude": d[0].lon } });
                else
                    navigator.geolocation.getCurrentPosition((pos) => {
                        this.setState({ ...this.state, "coords": { "latitude": pos.coords.latitude, "longitude": pos.coords.longitude } });
                    });
            })
                .catch(err => console.log(err))
            console.log('fuera del fetch', value)
        }

    }

    componentDidMount() {
        if (!this.state.coords)
            navigator.geolocation.getCurrentPosition((pos) => {
                this.setState({ ...this.state, "coords": { "latitude": pos.coords.latitude, "longitude": pos.coords.longitude } });
            });
    }
    render() {
        return (
            <section className="selectCategory">
                <CategoryConsumer>
                    {(value) => {
                        console.log("de algo")
                        console.log(value.coords, this.state.coords)
                        if (this.state.coords && (!value.coords || (this.state.coords.longitude !== value.coords.longitude || this.state.coords.latitude !== value.coords.latitude)))
                            value.selectStreet(this.state.coords);
                    }}
                </CategoryConsumer>
                <h1>Seleccione ubicación y categoría</h1>
                <h2>Ubicación</h2>
                <Select selectOption={this.handleStreet.bind(this)} defaultValue="Ubicación Actual" />
                <h2>Categorías</h2>
                <CategoryList />
                <Rectangle />
            </section>
        )
    }
}

export default SelectCategory;
