import React, { Component } from 'react';
import productsData from '../product/productsData';
import QuantityControl from '../quantityControl/QuantityControl';
import '../product/product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: props.currentCategory,
            cart: {},
        };
    }

    handleAddToCart = (productId) => {
        this.setState(prevState => ({
            cart: {
                ...prevState.cart,
                [productId]: (prevState.cart[productId] || 0) + 1
            }
        }));
    }

    handleRemoveFromCart = (productId) => {
        this.setState(prevState => {
            const updatedCart = { ...prevState.cart };
            if (updatedCart[productId] && updatedCart[productId] > 0) {
                updatedCart[productId]--;
            }
            return { cart: updatedCart };
        });
    }

    render() {
        const { currentCategory } = this.props;
        const { cart } = this.state;
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
                                            onIncrement={() => this.handleAddToCart(product.id)}
                                            onDecrement={() => this.handleRemoveFromCart(product.id)}
                                        />
                                        <button className="icon-cart-button" onClick={() => this.handleAddToCart(product.id)}>
                                            <img src="static/images/body/cart-circle.png" alt="cart"/>
                                            {cart[product.id] > 0 && (
                                                <span className="cart-count">{cart[product.id]}</span>
                                            )}
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
