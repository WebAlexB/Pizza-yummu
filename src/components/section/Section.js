import React, {Component} from 'react';
import Product from "../product";
import TopProduct from "../topProduct";
import ContactBlock from "../contactBlock";
import Banner from "../banner";
import Tab from "../tab";
import "../section/section.css";

class Section extends Component {
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
            <div className="sections">
                <div className="section">
                    <Banner/>
                    <div className="tabs">
                        <h3>Меню</h3>
                        <Tab onCategoryChange={this.handleCategoryChange}/>
                    </div>
                    <Product
                        currentCategory={currentCategory}
                        handleAddToCart={handleAddToCart}
                        cart={cart}
                    />
                </div>
                <div className="section">
                    <TopProduct/>
                </div>
                <div className="section">
                    <ContactBlock/>
                </div>
            </div>
        );
    }
}

export default Section;
