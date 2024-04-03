import React, { Component } from 'react';
import Router from '../router/Router';
import Header from '../header/header';
import Product from '../product/product';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
        };
    }

    handleAddToCart = (productId) => {
        this.setState(prevState => ({
            cart: {
                ...prevState.cart,
                [productId]: (prevState.cart[productId] || 0) + 1
            }
        }), () => this.updateCartCount());
    }

    handleRemoveFromCart = (productId) => {
        this.setState(prevState => {
            const updatedCart = { ...prevState.cart };
            if (updatedCart[productId] && updatedCart[productId] > 0) {
                updatedCart[productId]--;
            }
            return { cart: updatedCart };
        }, () => this.updateCartCount());
    }

    updateCartCount = () => {
        const cartCount = Object.values(this.state.cart).reduce((acc, curr) => acc + curr, 0);
        this.setState({ cartCount });
    }

    render() {
        const { cart } = this.state;

        return (
            <div>
                <Header cartCount={this.state.cartCount} />
                <Router
                    handleAddToCart={this.handleAddToCart}
                    handleRemoveFromCart={this.handleRemoveFromCart}
                    cart={cart}
                />
                <Product
                    handleAddToCart={this.handleAddToCart}
                    handleRemoveFromCart={this.handleRemoveFromCart}
                    cart={cart}
                />
            </div>
        );
    }
}

export default App;
