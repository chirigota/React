import React, { Component } from 'react';
import CategoryItem from "./../categoryItem/CategoryItem";
import { types as categories } from "../../JSON/categories.json";
import Swiper from "better-react-swiper";
import "./CategoryList.css"

class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    getCategories() {
        //fetch().then(() => {})
        this.setState({ ...this.state, categories });
    }

    displayCategories() {
        return this.state.categories.map((category, id) => <CategoryItem data={category} id={id} key={id} />)
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        let items = this.displayCategories()
        return (
            <section className="CategoryList">
                <div>
                    {items}
                </div>
            </section>
        )
    }
}

export default CategoryList
