import React, { Component } from 'react';
import CategoryDisplayer from "../categoryDisplayer/CategoryDisplayer.js";
import "./categoryPicker.css";

class CategoryPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "categories": [{"name": "comida", "src": "", "alt": "imágen comida"}, {"name": "snacks", "src": "", "alt": "imágen snacks"}, {"name": "supermercado", "src": "", "alt": "imágen supermercado"}, {"name": "comercio local", "src": "", "alt": "imágen comercio local"}, {"name": "parafarmacia y tiendas", "src": "", "alt": "imágen parafarmacia y tiendas"}, {"name":"envíos express", "src": "", "alt": "imágen envíos express"}],
            "selected": "none"
        }
    }

    selectOption(selected) {
        this.setState({...this.state, selected});
    }

    printOptions() {
        return this.state.categories.map((el, id) => 
            <CategoryDisplayer selectOption={this.selectOption.bind(this)} id={id} key={id} name={el.name} src={el.src} alt={el.alt} />
        )
    }

    render() {
        return (
            <section className="categoryPicker">
                {this.printOptions()}
                <p>Selected: {this.state.selected}</p>
            </section>
        )
    }
}

export default CategoryPicker
