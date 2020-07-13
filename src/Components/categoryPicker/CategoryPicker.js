import React, { Component } from 'react';
import CategoryDisplayer from "../categoryDisplayer/CategoryDisplayer.js";
import "./categoryPicker.css";

class CategoryPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "categories": [{"name": "comida", "src": "", "alt": "imágen comida"}, {"name": "snacks", "src": "", "alt": "imágen snacks"}, {"name": "supermercado", "src": "", "alt": "imágen supermercado"}, {"name": "comercio local", "src": "", "alt": "imágen comercio local"}, {"name": "parafarmacia y tiendas", "src": "", "alt": "imágen parafarmacia y tiendas"}, {"name":"envíos express", "src": "", "alt": "imágen envíos express"}],
            "selected": "none",
            "pos": undefined
        }
    }

    printOptions() {
        return this.state.categories.map((el, id) => 
            <CategoryDisplayer id={id} key={id} name={el.name} src={el.src} alt={el.alt} />
        )
    }

    render() {
        if (!this.state.pos)
            console.log(navigator.geolocation.getCurrentPosition((pos) => this.setState({ ...this.state, "pos": pos.timestamp }), (e) => this.setState({ ...this.state, pos: e.message })))
        return (
            <section className="categoryPicker">
                Pos: {this.state.pos}
                {this.printOptions()}
                <p>Selected: {this.state.selected}</p>
            </section>
        )
    }
}

export default CategoryPicker
