import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../action/addToCart';
import Header from '../../header';
import Section from '../../section';
import Footer from '../../footer';

class Home extends Component {
    render() {
        const { cart, totalCartItems, addToCart } = this.props;
        return (
            <div className="home">
                <Header cart={cart} totalCartItems={totalCartItems} />
                <Section handleAddToCart={addToCart} />
                <Footer />
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
