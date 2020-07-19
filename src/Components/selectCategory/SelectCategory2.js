import React, { Component } from 'react';
import CategoryList from "../categoryList/CategoryList.js";
import "./SelectCategory.css";
import Select from "../select/select.js";

class SelectCategory extends Component {
    render() {
        return (
            <section className="selectCategory">
                <h1>Seleccione ubicación y categoría</h1>
                <h2>Ubicación</h2>
                <Select defaultValue="Ubicación Actual"/>
                <h2>Categorías</h2>
                <CategoryList />
            </section>
        )
    }
}

export default SelectCategory;
