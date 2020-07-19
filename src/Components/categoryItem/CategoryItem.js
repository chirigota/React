import React, { Component } from 'react';
import "./CategoryItem.css";
import { CategoryConsumer } from "../../Contexts/categoryContext.js";

class CategoryDisplayer extends Component {
    render() {
        return (
            <CategoryConsumer>
                {(value) => {
                    console.log(value);
                    return (
                        <div className="categoryDisplayer" onClick={() => { value.selectCategory(this.props.data.id, "/map", {x: 0, y: 0})}}>
                            <img width={89} height={89} src={this.props.data.img} alt={this.props.data.name}/>
                            <p>{this.props.data.name}</p>
                        </div>
                    )
                }}
            </CategoryConsumer>
        )
    }
}

export default CategoryDisplayer