import React, { Component } from 'react';
import "./categoryDisplayer.css";
import { CategoryConsumer } from "../../Contexts/categoryContext.js";

class CategoryDisplayer extends Component {
    render() {
        return (
            <CategoryConsumer>
                {(value) => {
                    console.log(value);
                    return (
                        <div className="categoryDisplayer" onClick={() => { navigator.geolocation.getCurrentPosition((pos) => {console.log(pos); value.selectCategory(this.props.id, "/map", {"x": pos.coords.latitude, "y": pos.coords.longitude})})}}>
                            <img alt={this.props.alt} src={this.props.src}></img>
                            <p>{this.props.name}</p>
                        </div>
                    )
                }}
            </CategoryConsumer>
        )
    }
}

export default CategoryDisplayer