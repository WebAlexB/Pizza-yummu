import React, {Component} from 'react';
import productsData from '../services/productsData';
import QuantityControl from '../quantityControl/QuantityControl';
import '../product/product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: props.currentCategory,
            cart: {}
        };
    }

    handleAddToCart = (productId, quantity) => {
        if (quantity > 0) {
            this.props.handleAddToCart(productId, quantity);
        }
    }

    increment = (productId) => {
        this.setState(prevState => {
            const updatedCart = {...prevState.cart};
            updatedCart[productId] = (updatedCart[productId] || 0) + 1;
            return {cart: updatedCart};
        });
    }

    decrement = (productId) => {
        this.setState(prevState => {
            const updatedCart = {...prevState.cart};
            if (updatedCart[productId] && updatedCart[productId] > 0) {
                updatedCart[productId]--;
            }
            return {cart: updatedCart};
        });
    }

    render() {
        const {cart} = this.state;
        const {currentCategory} = this.props;
        const filteredProducts = productsData.filter(product => product.category === currentCategory);

        return (
            <div className="products">
                {filteredProducts.map(product => (
                    <div className="product" key={product.id}>
                        <div className="product-section">
                            <div className="product-info">
                                <h3 className="name-product">{product.name}</h3>
                                <p className="price-product">{product.price}</p>
                            </div>
                            <div className="ingredients-nav">
                                <div className="image-product">
                                    <img src={product.image} alt="product"/>
                                </div>
                                <div className="item-list">
                                    <ul className="ingredients-product">
                                        {product.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <div className="contact-quantity">
                                        <QuantityControl
                                            quantity={cart[product.id] || 0}
                                            onIncrement={() => this.increment(product.id)}
                                            onDecrement={() => this.decrement(product.id)}
                                        />
                                        <button className="icon-cart-button"
                                                onClick={() => this.handleAddToCart(product.id, cart[product.id] || 0)}>
                                            <img src="static/images/body/cart-circle.png" alt="cart"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Product;
