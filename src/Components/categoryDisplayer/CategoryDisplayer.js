import React, { Component } from 'react';
import "./categoryDisplayer.css";
import context, { categoryConsumer } from "../../Contexts/categoryContext.js";

class CategoryDisplayer extends Component {
    render() {
        return (
            <context.Consumer>
                {(value) => {
                    console.log(value);
                    return (
                        <div className="categoryDisplayer" onClick={() => value.selectCategory(this.props.id, "/map")}>
                            <img alt={this.props.alt} src={this.props.src}></img>
                            <p>{this.props.name}</p>
                        </div>
                    )
                }}
            </context.Consumer>
        )
    }
}

export default CategoryDisplayer
