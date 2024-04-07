import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../action/addToCart';
import Header from '../../header';
import Section from '../../section';

class Home extends Component {
    render() {
        const { cart, totalCartItems, addToCart } = this.props;
        return (
            <div className="home">
                <Header cart={cart} totalCartItems={totalCartItems} />
                <Section handleAddToCart={addToCart} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    totalCartItems: Object.values(state.cart).reduce((total, count) => total + count, 0),
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
