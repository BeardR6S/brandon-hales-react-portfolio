import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "United States Army", category: "Government" },
                {title: "Continental Building Products", category: "Manufacturing" },
                {title: "Anderson Manufacturing and Rifles", category: "Government"},
                {title: "L3 Harris Technologies", category: "Government"},
                {title: "Bosch", category: "Inventory Management"},
                {title: "Amazon", category: "Inventory Management" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Government')}>
                Government
                </button>
                <button onClick={() => this.handleFilter("Manufacturing")}>
                Manufacturing
                </button>
                <button onClick={() => this.handleFilter("Inventory Management")}>
                Inventory Management
                </button>

                {this.portfolioItems()}
            </div>
        )
    }
}