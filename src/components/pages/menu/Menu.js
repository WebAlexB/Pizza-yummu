import React, {Component} from 'react';
import Tab from "../../tab";
import Product from "../../product";
import TopProduct from "../../topProduct";
import './menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'Піца',
        }
    }

    handleCategoryChange = (category) => {
        this.setState({currentCategory: category});
    }

    render() {
        const {currentCategory} = this.state;
        const {handleAddToCart, cart} = this.props;
        return (
            <>
                <div className='menu-page'>
                    <div className="tabs">
                        <h1>Меню</h1>
                        <Tab onCategoryChange={this.handleCategoryChange}/>
                    </div>
                    <Product
                        currentCategory={currentCategory}
                        handleAddToCart={handleAddToCart}
                        cart={cart}
                    />
                    <div className="section">
                        <TopProduct/>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;