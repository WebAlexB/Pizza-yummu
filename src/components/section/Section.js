import React, { Component } from 'react';
import Product from "../product";
import TopProduct from "../topProduct";
import ContactBlock from "../contactBlock";
import "../section/section.css";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'Піца',
        }
    }

    handleCategoryChange = (category) => {
        this.setState({ currentCategory: category });
    }

    render() {
        const { currentCategory } = this.state;
        const { handleAddToCart, cart } = this.props;

        return (
            <div className="sections">
                <div className="section">
                    <div className="banners">
                        <img className="banner-pizza" src="static/images/slider/yellow.png" alt="yellow"/>
                        <img className="pizza" src="static/images/slider/pizza.png" alt="pizza"/>
                    </div>
                    <div className="tabs">
                        <h3>Меню</h3>
                        <div className="tab">
                            <button onClick={() => this.handleCategoryChange('Піца')}>Піца</button>
                            <button onClick={() => this.handleCategoryChange('Кава')}>Кава</button>
                        </div>
                    </div>
                    <Product
                        currentCategory={currentCategory}
                        handleAddToCart={handleAddToCart}
                        cart={cart}
                    />
                </div>
                <div className="section">
                    <TopProduct />
                </div>
                <div className="section">
                    <ContactBlock />
                </div>
            </div>
        );
    }
}

export default Section;
