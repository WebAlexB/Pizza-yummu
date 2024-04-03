import React, { Component } from 'react';

class QuantityControl extends Component {
    render() {
        const { quantity, onIncrement, onDecrement } = this.props;

        return (
            <div className="quantity-product">
                <button onClick={onDecrement}>-</button>
                <p>{quantity}</p>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
}

export default QuantityControl;
